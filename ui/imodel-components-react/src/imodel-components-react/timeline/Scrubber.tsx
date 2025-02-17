/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import "./Scrubber.scss";
import * as React from "react";
import { Slider } from "@itwin/itwinui-react";
import { CommonProps, useEventListener } from "@itwin/core-react";
import { toDateString, toTimeString } from "@itwin/components-react";
import { TimelineDateMarkerProps } from "./TimelineComponent";

/**
 * @internal
 */
export function getPercentageOfRectangle(rect: DOMRect, pointer: number) {
  const position = Math.min(rect.right, Math.max(rect.left, pointer));
  return (position - rect.left) / rect.width;
}

// istanbul ignore next - WIP
const formatDuration = (value: number) => {
  const addZero = (i: number) => {
    return (i < 10) ? `0${i}` : i;
  };

  const date = new Date(value);
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return `${addZero(minutes)}:${addZero(seconds)}`;
};

const formatDate = (startDate: Date, endDate: Date, fraction: number, timeZoneOffset?: number) => {
  const delta = (endDate.getTime() - startDate.getTime()) * fraction;
  const date = new Date(startDate.getTime() + delta);
  return toDateString(date, timeZoneOffset);
};

// istanbul ignore next - WIP
const formatTime = (startDate: Date, endDate: Date, fraction: number, timeZoneOffset?: number) => {
  const delta = (endDate.getTime() - startDate.getTime()) * fraction;
  const date = new Date(startDate.getTime() + delta);
  return ` ${toTimeString(date, timeZoneOffset)}`;
};

function generateToolTipText(showTime: boolean, percent: number, min: number, max: number, startDate?: Date, endDate?: Date, timeZoneOffset = 0) {
  if (startDate && endDate)
    return `${formatDate(startDate, endDate, percent, timeZoneOffset)}${showTime ? formatTime(startDate, endDate, percent, timeZoneOffset) : ""} `;

  const val = Math.round(min + ((max - min) * percent));
  return formatDuration(val);
}

function getPercentageFromDate(startDate: Date, endDate: Date, date?: Date) {
  const newDate = date ? date : new Date();
  const startTime = startDate.getTime();
  const totalDuration = endDate.getTime() - startTime;
  return (newDate.getTime() - startTime) / totalDuration;
}

function getDateMarker(dateMarkerPropsIn: TimelineDateMarkerProps, startDate: Date, endDate: Date): DateMarkerProps {
  const percentage = getPercentageFromDate(startDate, endDate, dateMarkerPropsIn.date);
  const marker = dateMarkerPropsIn.dateMarker ? dateMarkerPropsIn.dateMarker : <span className="date-marker-default"></span>;
  return { datePercentage: percentage, dateMarker: marker };
}

function markDateInTimelineRange(dateMarkerProps?: TimelineDateMarkerProps, startDate?: Date, endDate?: Date): boolean {
  // istanbul ignore else
  if (dateMarkerProps && startDate && endDate) {
    const inDate = dateMarkerProps.date ? dateMarkerProps.date : new Date();
    // istanbul ignore else
    if (inDate.getTime() >= startDate.getTime() && inDate.getTime() <= endDate.getTime())
      return true;
  }
  return false;
}
/**
 * @internal
 */
export function RailMarkers({ showToolTip, percent, tooltipText, markDate }: {
  showToolTip: boolean;
  percent: number;
  tooltipText: string;
  markDate?: DateMarkerProps;
}) {

  return (
    <div className="components-timeline-rail-marker-container">
      {showToolTip &&
        <div className="components-timeline-tooltip" style={{ left: `${Math.round(percent * 100)}% ` }}>
          <span className="tooltip-text">{tooltipText}</span>
        </div>}
      {markDate &&
        <div className="components-timeline-date-marker" data-testid="test-date-marker" style={{ left: `${Math.round(markDate.datePercentage * 100)}% ` }}>
          {markDate.dateMarker}
        </div>}
    </div>
  );
}

/**
 * Custom Timeline Thumb
 * @internal
 */
export function CustomThumb() {
  return (
    <div className="scrubber-handle">
      <div /><div /><div />
    </div>
  );
}

/**
 * @internal
 */
export function useFocusedThumb(sliderContainer: HTMLDivElement | undefined) {
  const [thumbElement, setThumbElement] = React.useState<HTMLDivElement>();

  React.useLayoutEffect(() => {
    // istanbul ignore else
    if (sliderContainer) {
      const element = sliderContainer.querySelector(".iui-slider-thumb");
      if (element && thumbElement !== element) {
        setThumbElement(element as HTMLDivElement);
      }
    }
  }, [sliderContainer, thumbElement]);

  const [thumbHasFocus, setThumbHasFocus] = React.useState(false);

  const handleThumbFocus = React.useCallback(() => {
    setThumbHasFocus(true);
  }, []);

  const handleThumbBlur = React.useCallback(() => {
    setThumbHasFocus(false);
  }, []);

  useEventListener("focus", handleThumbFocus, thumbElement);
  useEventListener("blur", handleThumbBlur, thumbElement);
  return thumbHasFocus;
}

/** Properties for Scrubber/Slider used on timeline control
 * @internal
 */
export interface ScrubberProps extends CommonProps {
  currentDuration: number;
  totalDuration: number;
  isPlaying: boolean;
  inMiniMode: boolean;
  startDate?: Date;
  endDate?: Date;
  showTime?: boolean;
  onChange?: (values: ReadonlyArray<number>) => void;
  onUpdate?: (values: ReadonlyArray<number>) => void;
  timeZoneOffset?: number;
  markDate?: TimelineDateMarkerProps;
}

/** Properties for marking current date in RailMarkers
 * @internal
 */
interface DateMarkerProps {
  datePercentage: number;
  dateMarker?: React.ReactNode;
}
/** Scrubber/Slider for timeline control
 * @internal
 */
export function Scrubber(props: ScrubberProps) {
  const { startDate, endDate, showTime, isPlaying, totalDuration, timeZoneOffset,
    currentDuration, className, onChange, onUpdate } = props;

  const thumbProps = () => {
    return {
      className: "components-timeline-thumb",
      children: <CustomThumb />,
    };
  };

  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [sliderContainer, setSliderContainer] = React.useState<HTMLDivElement>();
  const [pointerPercent, setPointerPercent] = React.useState(0);

  React.useLayoutEffect(() => {
    // istanbul ignore else
    if (sliderRef.current) {
      const container = sliderRef.current.querySelector(".iui-slider-container");
      if (container && sliderContainer !== container) {
        setSliderContainer(container as HTMLDivElement);
      }
    }
  }, [sliderContainer]);

  const tooltipProps = React.useCallback(() => {
    return { visible: false };
  }, []);

  const [showRailTooltip, setShowRailTooltip] = React.useState(false);

  // istanbul ignore next
  const handlePointerEnter = React.useCallback(() => {
    setShowRailTooltip(true);
  }, []);

  // istanbul ignore next
  const handlePointerLeave = React.useCallback(() => {
    setShowRailTooltip(false);
  }, []);

  const handlePointerMove = React.useCallback((event: React.PointerEvent) => {
    sliderContainer &&
      setPointerPercent(getPercentageOfRectangle(sliderContainer.getBoundingClientRect(), event.clientX));
  }, [sliderContainer]);

  const thumbHasFocus = useFocusedThumb(sliderContainer);

  const tickLabel = React.useMemo(() => {
    const showTip = isPlaying || showRailTooltip || thumbHasFocus;
    const percent = (isPlaying || thumbHasFocus) ? currentDuration / totalDuration : pointerPercent;
    const markDateInRange = markDateInTimelineRange(props.markDate, startDate, endDate);
    const currentDateMarker = props.markDate && markDateInRange && startDate && endDate ? getDateMarker(props.markDate, startDate, endDate) : undefined;
    const tooltipText = generateToolTipText(!!showTime, percent, 0, totalDuration, startDate, endDate, timeZoneOffset);
    return (<RailMarkers showToolTip={showTip} percent={percent} tooltipText={tooltipText} markDate={currentDateMarker} />);
  }, [isPlaying, showRailTooltip, currentDuration, totalDuration, pointerPercent, startDate, endDate, timeZoneOffset, showTime, thumbHasFocus, props.markDate]);

  return (
    <Slider ref={sliderRef}
      className={className}
      step={1}
      min={0}
      max={totalDuration}
      minLabel=""
      maxLabel=""
      onUpdate={onUpdate}
      onChange={onChange}
      values={[currentDuration]}
      tooltipProps={tooltipProps}
      thumbProps={thumbProps}
      tickLabels={tickLabel}
      railContainerProps={{
        onPointerEnter: handlePointerEnter,
        onPointerMove: handlePointerMove,
        onPointerLeave: handlePointerLeave,
      }}
    />
  );
}
