import React from "react";
import { ResponsivePie } from "@nivo/pie";

const ChallengePieChart = () => {
  return (
    <div className="ChallengeChart">
      <div id="ChartText"> 카테고리별 지출내역</div>
      <div id="Chart">
        <ResponsivePie
          data={[
            /**Data */
            { id: "cola", value: 324 },
            { id: "cidar", value: 88 },
            { id: "fanta", value: 221 },
            { id: "milkis", value: 145 },
            { id: "lemonade", value: 162 },
            { id: "coffee", value: 395 },
          ]}
          /**Chart Margin */
          margin={{ top: 30, right: 80, bottom: 30, left: 80 }}
          /**Donut Size */
          innerRadius={0.4}
          /** pad 간격*/
          padAngle={0.4}
          /** pad radius 설정 (pad별 간격이 있을 시 보임)*/
          cornerRadius={1}
          /** chart 색상*/
          colors={[
            "#4292C6",
            "#6BAED6",
            "#9ECAE1",
            "#DBD778",
            "#DEEBF7",
            "#F7FBFF",
          ]}
          /** link label 색상*/
          arcLinkLabelsTextColor="#000000"
        />
      </div>
    </div>
  );
};

export default ChallengePieChart;
