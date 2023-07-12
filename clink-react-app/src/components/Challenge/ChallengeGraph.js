import React, { useState } from "react";
import "../../styles/MainCalendar.scss";
import ChallengeTable from "./ChallengeTable";
import ChallengeBarChart from "./ChallengeBarChart";
import ChallengePieChart from "./ChallengePieChart";
import Calendar from "react-calendar";
import moment from "moment";

const ChallengeGraph = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false} //전 달 || 다음 달 일자 보이기
        selectRange={true}
      />
      <ChallengeTable date={value} />
      <ChallengeBarChart />
      <ChallengePieChart />
    </>
  );
};

export default ChallengeGraph;
