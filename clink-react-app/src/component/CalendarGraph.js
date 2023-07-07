// yarn add @nivo/calendar
import { ResponsiveTimeRange } from "@nivo/calendar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const CalendarGraph = ({ data }) => (
  <ResponsiveTimeRange
    data={data}
    weekdayTicks={[]} //
    weekdayLegendOffset={0} //
    from="2016-02-25" //"2015-03-01"
    to="2016-06-30" //"2016-07-12"
    emptyColor="#eeeeee"
    colors={["#80e6ff", "#66ccff", "#3399ff", "#297acc"]}
    margin={{ top: 40, right: 20, bottom: 0, left: 20 }}
    yearSpacing={50}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
  />
);

export default CalendarGraph;
