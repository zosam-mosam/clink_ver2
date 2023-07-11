import React from 'react';
import '../styles/Challenge.scss';
import ChallengeTitle from '../components/Challenge/ChallengeTitle';
import ChallengeGoal from '../components/Challenge/ChallengeGoal';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import ChallengeGraph from '../components/Challenge/ChallengeGraph';

const Challenge = () => {
  return (
    <div className="Challenge" style={{ paddingBottom: '20%' }}>
      <div id="backgroundCircle"></div>
      <div className="challengContent">
        <Header />
        <ChallengeTitle />
        <ChallengeGoal value={7200} max={10000} />
        <ChallengeGraph />
        {/* <Bottom /> */}
      </div>
    </div>
  );
};

export default Challenge;
