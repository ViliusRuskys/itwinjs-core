/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { expect } from "chai";
import * as React from "react";
import * as sinon from "sinon";
import { BadgeType, WidgetState } from "@itwin/appui-abstract";
import {
  ConfigurableCreateInfo, ConfigurableUiControlType, ConfigurableUiManager, FrontstageManager, SyncUiEventDispatcher, SyncUiEventId, UiFramework, WidgetChangedEventArgs,
  WidgetControl, WidgetDef, WidgetProps,
} from "../../appui-react";
import TestUtils from "../TestUtils";
import { SvgList } from "@itwin/itwinui-icons-react";

// cSpell:ignore widgetstate

describe("WidgetDef", () => {
  class TestWidget extends WidgetControl {
    constructor(info: ConfigurableCreateInfo, options: any) {
      super(info, options);

      this.reactNode = <div />;
    }
  }

  before(async () => {
    await TestUtils.initializeUiFramework();
    // need to set to UI 1 so widget state is independent of NineZoneState.
    UiFramework.setUiVersion("1"); // eslint-disable-line deprecation/deprecation
    ConfigurableUiManager.registerControl("WidgetDefTest", TestWidget);
  });

  after(() => {
    TestUtils.terminateUiFramework();
  });

  it("optional properties", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      defaultState: WidgetState.Open,
      priority: 100,
      isFreeform: true,
      iconSpec: "icon-home",
      label: "label",
      tooltip: "tooltip",
      isToolSettings: true,
      isStatusBar: true,
      fillZone: true,
      isFloatingStateSupported: true,
      isFloatingStateWindowResizable: false,
      applicationData: "AppData",
      element: <div />,
      syncEventIds: [SyncUiEventId.FrontstageReady],
      stateFunc: sinon.spy(),
      badgeType: BadgeType.TechnicalPreview,
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation

    expect(widgetDef.isVisible).to.eq(true);
    expect(widgetDef.isActive).to.eq(true);
    expect(widgetDef.isFloating).to.eq(false);
    expect(widgetDef.priority).to.eq(100);
    expect(widgetDef.isFreeform).to.eq(true); // eslint-disable-line deprecation/deprecation
    expect(widgetDef.isFloatingStateSupported).to.eq(true);
    expect(widgetDef.isFloatingStateWindowResizable).to.eq(false);
    expect(widgetDef.isToolSettings).to.eq(true);
    expect(widgetDef.isStatusBar).to.eq(true);
    expect(widgetDef.fillZone).to.eq(true); // eslint-disable-line deprecation/deprecation
    expect(widgetDef.applicationData).to.eq("AppData");

    expect(widgetDef.label).to.eq("label");
    expect(widgetDef.tooltip).to.eq("tooltip");
    expect(widgetDef.iconSpec).to.eq("icon-home");
    expect(widgetDef.badgeType).to.eq(BadgeType.TechnicalPreview);

    widgetDef.iconSpec = "icon-lightbulb";
    expect(widgetDef.iconSpec).to.eq("icon-lightbulb");
    expect (React.isValidElement(widgetDef.iconSpec)).to.be.false;
  });

  it("should work with react icon", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      defaultState: WidgetState.Open,
      priority: 200,
      iconSpec: <SvgList />,
      label: "label",
      tooltip: "tooltip",
      isToolSettings: false,
      fillZone: true,
      isFloatingStateSupported: true,
      isFloatingStateWindowResizable: true,
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation
    expect (React.isValidElement(widgetDef.iconSpec)).to.be.true;
  });

  it("should properly handle iconSpec set/get", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      defaultState: WidgetState.Open,
      priority: 200,
      iconSpec: "icon-lightbulb",
      internalData: new Map<string,any>(),
      label: "label",
      tooltip: "tooltip",
      isToolSettings: false,
      fillZone: true,
      isFloatingStateSupported: true,
      isFloatingStateWindowResizable: true,
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation
    expect(widgetDef.iconSpec).to.eq("icon-lightbulb");
    expect (React.isValidElement(widgetDef.iconSpec)).to.be.false;

    widgetDef.iconSpec = <SvgList />;
    expect (React.isValidElement(widgetDef.iconSpec)).to.be.true;

    widgetDef.iconSpec = "icon-home";
    expect(widgetDef.iconSpec).to.eq("icon-home");
    expect (React.isValidElement(widgetDef.iconSpec)).to.be.false;

  });
  it("registerControl & widgetControl using same classId", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      classId: "WidgetDefTest",
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation

    expect(widgetDef.getWidgetControl(ConfigurableUiControlType.Widget)).to.not.be.undefined;
    expect(widgetDef.reactNode).to.not.be.undefined;
  });

  it("labelKey and tooltipKey should return translated string", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      classId: "WidgetDefTest",
      labelKey: "App:label",
      tooltipKey: "App:tooltip",
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation

    expect(widgetDef.label).to.eq("label");
    expect(widgetDef.tooltip).to.eq("tooltip");
  });

  it("reactNode supports set and get", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      classId: "WidgetDefTest",
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation

    widgetDef.reactNode = <div />;
    expect(widgetDef.reactNode).to.not.be.undefined;
  });

  it("widgetControl using constructor classId", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      classId: TestWidget,
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation
    const widgetControl = widgetDef.getWidgetControl(ConfigurableUiControlType.Widget);

    expect(widgetControl).to.not.be.undefined;
    if (widgetControl)
      expect(widgetControl.classId).to.eq("TestWidget");
    expect(widgetDef.reactNode).to.not.be.undefined;
  });

  it("setWidgetState", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      classId: "WidgetDefTest",
      badgeType: BadgeType.None,
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation
    widgetDef.setWidgetState(WidgetState.Open);

    expect(widgetDef.stateChanged).to.eq(true);
    expect(widgetDef.isVisible).to.eq(true);
    expect(widgetDef.isActive).to.eq(true);
    expect(widgetDef.canOpen()).to.be.true;
  });

  it("setWidgetState using state function", () => {
    const testEventId = "test-widgetstate";
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      classId: "WidgetDefTest",
      syncEventIds: [testEventId],
      stateFunc: (): WidgetState => WidgetState.Hidden,
    };

    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation
    widgetDef.setWidgetState(WidgetState.Open);

    expect(widgetDef.isVisible).to.eq(true);
    expect(widgetDef.isActive).to.eq(true);
    expect(widgetDef.canOpen()).to.be.true;
    // firing sync event should trigger state function and set state to Hidden.
    SyncUiEventDispatcher.dispatchImmediateSyncUiEvent(testEventId);
    expect(widgetDef.isVisible).to.eq(false);
  });

  it("getWidgetControl throws an Error when type is incorrect", () => {
    const widgetProps: WidgetProps = { // eslint-disable-line deprecation/deprecation
      classId: "WidgetDefTest",
    };
    const widgetDef: WidgetDef = new WidgetDef(widgetProps); // eslint-disable-line deprecation/deprecation

    expect(() => widgetDef.getWidgetControl(ConfigurableUiControlType.StatusBarWidget)).to.throw(Error);
  });

  describe("show", () => {
    it("should emit onWidgetShowEvent", () => {
      const spy = sinon.spy(FrontstageManager.onWidgetShowEvent, "emit");
      const widgetDef = new WidgetDef();
      widgetDef.show();
      spy.calledOnceWithExactly(sinon.match({
        widgetDef,
      })).should.true;
    });
  });

  describe("expand", () => {
    it("should emit onWidgetExpandEvent", () => {
      const spy = sinon.spy(FrontstageManager.onWidgetExpandEvent, "emit");
      const widgetDef = new WidgetDef();
      widgetDef.expand();
      spy.calledOnceWithExactly(sinon.match({
        widgetDef,
      })).should.true;
    });
  });

  describe("label", () => {
    it("should set label", () => {
      const sut = new WidgetDef();
      sut.setLabel("test");

      sut.label.should.eq("test");
    });

    it("should emit onWidgetLabelChangedEvent", () => {
      const spy = sinon.stub<(args: WidgetChangedEventArgs) => void>();
      FrontstageManager.onWidgetLabelChangedEvent.addListener(spy);
      const sut = new WidgetDef();
      sut.setLabel("test");

      spy.calledOnceWithExactly(sinon.match({ widgetDef: sut })).should.true;
    });

    it("should not emit onWidgetLabelChangedEvent for same label", () => {
      const spy = sinon.stub<(args: WidgetChangedEventArgs) => void>();
      const sut = new WidgetDef();
      sut.setLabel("test");

      FrontstageManager.onWidgetLabelChangedEvent.addListener(spy);
      sut.setLabel("test");

      spy.notCalled.should.true;
    });
  });

  describe("tabLocation", () => {
    it("should set tabLocation", () => {
      const sut = new WidgetDef();
      sut.tabLocation = {
        side: "bottom",
        tabIndex: 8,
        widgetId: "abc",
        widgetIndex: 5,
      };
      sut.tabLocation.should.eql({
        side: "bottom",
        tabIndex: 8,
        widgetId: "abc",
        widgetIndex: 5,
      });
    });
  });
});
