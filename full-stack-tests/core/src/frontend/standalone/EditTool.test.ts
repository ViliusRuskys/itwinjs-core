/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { ProcessDetector } from "@itwin/core-bentley";
import { IModelApp, PrimitiveTool, SnapshotConnection, Viewport } from "@itwin/core-frontend";
import { EditTools, makeEditToolIpc } from "@itwin/editor-frontend";
import { testCmdIds, TestCmdOjb1, TestCmdResult, TestCommandIpc } from "../../common/TestEditCommandIpc";
import { TestUtility } from "../TestUtility";

const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiAsPromised);

let iModel: SnapshotConnection;
let testOut: TestCmdResult;
const cmdArg = "test command arg";
let cmdStr: string;

class TestEditTool1 extends PrimitiveTool {
  public static override toolId = "TestEditTool1";
  public override isCompatibleViewport(_vp: Viewport | undefined, _isSelectedViewChange: boolean): boolean { return true; }
  public async onRestartTool() { return this.exitTool(); }

  public testIpc = makeEditToolIpc<TestCommandIpc>();

  public async go(cmd: string, str1: string, str2: string, obj1: TestCmdOjb1) {
    cmdStr = await EditTools.startCommand<string>(cmd, iModel.key, cmdArg);
    testOut = await this.testIpc.testMethod1(str1, str2, obj1);
  }
}

if (!ProcessDetector.isMobileAppFrontend) {
  describe("EditTools", () => {

    before(async () => {
      await TestUtility.startFrontend(undefined, undefined, true);
      const namespace = "TestApp";
      await IModelApp.localization.registerNamespace(namespace);
      IModelApp.tools.register(TestEditTool1, namespace);
      iModel = await SnapshotConnection.openFile("test.bim"); // relative path resolved by BackendTestAssetResolver

    });

    after(async () => {
      await iModel.close();
      await TestUtility.shutdownFrontend();
    });

    it("should start edit commands", async () => {
      expect(await IModelApp.tools.run("TestEditTool1")).to.be.true;
      const tool = IModelApp.toolAdmin.currentTool as TestEditTool1;
      assert.isTrue(tool instanceof TestEditTool1);
      const str1 = "abc";
      const str2 = "def";
      const obj1 = {
        i1: 10,
        i2: 20,
        buf: Int8Array.from([1, 2, 3, 4, 6]),
      };

      await tool.go(testCmdIds.cmd1, str1, str2, obj1);
      assert.equal(cmdStr, `${cmdArg}:1`);
      assert.equal(testOut.num, 30);
      assert.equal(testOut.str, "abcdef");
      assert.deepEqual(Array.from(testOut.buf), [1, 2, 3, 4, 6, -22]);

      await tool.go(testCmdIds.cmd2, str1, str2, obj1);
      assert.equal(cmdStr, `${cmdArg}:2`);
      assert.equal(testOut.num, -10);
      assert.equal(testOut.str, "defabc");
      assert.deepEqual(Array.from(testOut.buf), [1, 2, 3, 4, 6, -32]);
    });

  });
}
