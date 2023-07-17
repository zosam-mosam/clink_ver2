import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Challenge.scss";
import ChallengeTitle from "../components/Challenge/ChallengeTitle";
import ChallengeGoal from "../components/Challenge/ChallengeGoal";
import Header from "../components/Header";
import ChallengeGraph from "../components/Challenge/ChallengeGraph";

const Challenge = () => {
  const [ChallengeTitleText, setChallengeTitleText] = useState();
  const [ChallengeDescriptionText, setChallengeDescruotuibText] = useState();
  const [max, setMax] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:80/challenge/index.do?userNo=1")
      .then((response) => {
        console.log(response);
        setChallengeTitleText(response.data.title);
        setChallengeDescruotuibText(response.data.description);
        setMax(response.data.goal);
        setValue(response.data.value);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="Challenge" style={{ paddingBottom: "20%" }}>
      <div id="backgroundCircle"></div>
      <div className="challengContent">
        <Header />
        <ChallengeTitle
          title={ChallengeTitleText}
          description={ChallengeDescriptionText}
        />
        <ChallengeGoal value={value} max={max} />
        <ChallengeGraph />
      </div>
    </div>
  );
};

export default Challenge;
