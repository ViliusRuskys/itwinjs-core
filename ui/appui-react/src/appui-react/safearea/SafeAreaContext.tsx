/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
/** @packageDocumentation
 * @module State
 */

import * as React from "react";
import { Subtract } from "@itwin/presentation-common";
import { SafeAreaInsets } from "@itwin/appui-layout-react";

/**
 * Context used to manage safe area (feature used by devices with non-rectangular screens).
 * @public
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SafeAreaContext = React.createContext<SafeAreaInsets>(SafeAreaInsets.None); // eslint-disable-line deprecation/deprecation

interface InjectedWithSafeAreaProps {
  readonly safeAreaInsets?: SafeAreaInsets; // eslint-disable-line deprecation/deprecation
}

/** HOC that injects SafeAreaInsets.
 * @deprecated Use [[SafeAreaContext]] instead.
 * @public
 */
export const withSafeArea = <P extends InjectedWithSafeAreaProps, C>(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: React.JSXElementConstructor<P> & C,
) => {
  type Props = JSX.LibraryManagedAttributes<C, Subtract<P, InjectedWithSafeAreaProps>>;

  return class WithSafeArea extends React.PureComponent<Props> {
    public override render() {
      const { ...props } = this.props;
      return (
        <SafeAreaContext.Consumer>
          {(safeAreaInsets) => (
            <Component
              {...props as any}
              safeAreaInsets={safeAreaInsets}
            />
          )}
        </SafeAreaContext.Consumer>
      );
    }
  };
};
