/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
/** @packageDocumentation
 * @module RPC
 */

import { IModelDb, IpcHandler } from "@itwin/core-backend";
import { Logger } from "@itwin/core-bentley";
import {
  NodeKeyJSON, PRESENTATION_IPC_CHANNEL_NAME, PresentationIpcInterface, RulesetVariable, RulesetVariableJSON, SetRulesetVariableParams,
  UnsetRulesetVariableParams, UpdateHierarchyStateParams,
} from "@itwin/presentation-common";
import { PresentationBackendLoggerCategory } from "./BackendLoggerCategory";
import { Presentation } from "./Presentation";

/** @internal */
export class PresentationIpcHandler extends IpcHandler implements PresentationIpcInterface {
  public channelName = PRESENTATION_IPC_CHANNEL_NAME;

  public async setRulesetVariable(params: SetRulesetVariableParams<RulesetVariableJSON>): Promise<void> {
    const { clientId, rulesetId, variable } = params;
    const parsedVariable = RulesetVariable.fromJSON(variable);
    Presentation.getManager(clientId).vars(rulesetId).setValue(parsedVariable.id, parsedVariable.type, parsedVariable.value);
  }

  public async unsetRulesetVariable(params: UnsetRulesetVariableParams): Promise<void> {
    const { clientId, rulesetId, variableId } = params;
    Presentation.getManager(clientId).vars(rulesetId).unset(variableId);
  }

  public async updateHierarchyState(params: UpdateHierarchyStateParams<NodeKeyJSON>): Promise<void> {
    const { clientId, imodelKey, rulesetId, stateChanges } = params;
    const imodelDb = IModelDb.tryFindByKey(imodelKey);
    if (!imodelDb) {
      Logger.logError(PresentationBackendLoggerCategory.Ipc, "Could not find IModelDb to perform hierarchy state update");
      return;
    }
    Presentation.getManager(clientId).getNativePlatform().updateHierarchyState(imodelDb.nativeDb, rulesetId, stateChanges);
  }
}
