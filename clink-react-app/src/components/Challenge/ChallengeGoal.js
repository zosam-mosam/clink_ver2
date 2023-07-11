import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const ChallengeGoal = ({ value, max }) => {
  const completed = (value / max) * 100;

  return (
    <div className="ChallengeGoal">
      <div className="ChallengeGoalContent">
        <ProgressBar now={completed} label={`${completed}%`} />
        <div id="ChallengeTodaysGoal">
          목표금액 {max}원 중 {value}원 사용
        </div>
      </div>
    </div>
  );
};

export default ChallengeGoal;
