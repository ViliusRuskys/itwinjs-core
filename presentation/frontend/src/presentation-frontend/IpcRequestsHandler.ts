/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import { AsyncMethodsOf, PromiseReturnType } from "@itwin/core-bentley";
import { IpcApp } from "@itwin/core-frontend";
import {
  NodeKey, NodeKeyJSON, PRESENTATION_IPC_CHANNEL_NAME, PresentationIpcInterface, RulesetVariable, RulesetVariableJSON, SetRulesetVariableParams,
  UnsetRulesetVariableParams, UpdateHierarchyStateParams,
} from "@itwin/presentation-common";

/** @internal */
export class IpcRequestsHandler {
  public readonly clientId: string;

  constructor(clientId: string) {
    this.clientId = clientId;
  }

  private async call<T extends AsyncMethodsOf<PresentationIpcInterface>>(methodName: T, ...args: Parameters<PresentationIpcInterface[T]>): Promise<PromiseReturnType<PresentationIpcInterface[T]>> {
    return IpcApp.callIpcChannel(PRESENTATION_IPC_CHANNEL_NAME, methodName, ...args);
  }

  public async setRulesetVariable(params: Omit<SetRulesetVariableParams<RulesetVariable>, "clientId">) {
    const jsonParams: SetRulesetVariableParams<RulesetVariableJSON> = {
      ...params,
      clientId: this.clientId,
      variable: RulesetVariable.toJSON(params.variable),
    };
    return this.call("setRulesetVariable", jsonParams);
  }

  public async unsetRulesetVariable(params: Omit<UnsetRulesetVariableParams, "clientId">) {
    const jsonParams: UnsetRulesetVariableParams = {
      ...params,
      clientId: this.clientId,
    };
    return this.call("unsetRulesetVariable", jsonParams);
  }

  public async updateHierarchyState(params: Omit<UpdateHierarchyStateParams<NodeKey>, "clientId">) {
    const jsonParams: UpdateHierarchyStateParams<NodeKeyJSON> = {
      ...params,
      clientId: this.clientId,
      stateChanges: params.stateChanges.map((sc) => ({
        ...sc,
        ...(sc.nodeKey ? { nodeKey: NodeKey.toJSON(sc.nodeKey) } : undefined),
      })),
    };
    return this.call("updateHierarchyState", jsonParams);
  }
}
