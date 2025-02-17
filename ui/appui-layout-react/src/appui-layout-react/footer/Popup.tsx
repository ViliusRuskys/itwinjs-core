/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
/** @packageDocumentation
 * @module Footer
 */

import "./Popup.scss";
import classnames from "classnames";
import * as React from "react";
import { RelativePosition } from "@itwin/appui-abstract";
import { Popup, PopupProps } from "@itwin/core-react";

/** Available footer popup content types.
 * @deprecated Type used in a deprecated component.
 * @beta
 */
export enum FooterPopupContentType {
  /** Indicates that popup is used to host a dialog. */
  Dialog = "nz-content-dialog",
  /** Indicates that popup is used to host a panel. */
  Panel = "nz-content-panel",
}

/** Properties of [[FooterPopup]] component.
 * @deprecated Props of a deprecated component.
 * @beta
 */
export interface FooterPopupProps extends Partial<PopupProps> {
  /** Describes content type. Defaults to [[FooterPopupContentType.Dialog]]. */
  contentType: FooterPopupContentType;
}

/** Default properties of [[FooterPopup]] component.
 * @deprecated Default props of a deprecated component.
 * @beta
 */
export type FooterPopupDefaultProps = Pick<FooterPopupProps, "contentType">;

/** Popup component used in [[Footer]] component.
 * @deprecated Use `popup` prop of [StatusBarIndicator]($appui-react) instead.
 * @beta
 */
export class FooterPopup extends React.PureComponent<FooterPopupProps> {
  public static readonly defaultProps: FooterPopupDefaultProps = {
    contentType: FooterPopupContentType.Dialog,
  };

  public override render() {
    const { className, contentType, ...props } = this.props;
    return (
      <Popup
        className={classnames(
          "nz-footer-popup",
          contentType,
          className,
        )}
        position={RelativePosition.Top}
        showArrow
        showShadow={true}
        {...props}
      />
    );
  }
}
