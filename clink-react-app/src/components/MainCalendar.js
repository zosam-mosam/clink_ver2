import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";
import "../styles/MainCalendar.scss";

const MainCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false} //전 달 || 다음 달 일자 보이기
        selectRange={true}
      />
    </div>
  );
};

export default MainCalendar;
