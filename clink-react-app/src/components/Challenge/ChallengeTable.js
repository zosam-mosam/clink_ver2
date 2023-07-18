import React from "react";
import moment from "moment";
import ChallengeTableCard from "./ChallengeTableCard";

const ChallengeTable = ({ date }) => {
  return (
    <div className="ChallengeTable">
      <div id="SelectedDate">
        {moment(date[0]).format("MM월 DD일")} ~{" "}
        {moment(date[1]).format("MM월 DD일")}
      </div>
      <ChallengeTableCard
        date="06.28"
        time="15:51:33"
        description="마라탕"
        category="식사, 식재료"
        amount="13,000"
      />
    </div>
  );
};

export default ChallengeTable;
