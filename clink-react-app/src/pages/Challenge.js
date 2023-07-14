import React from 'react';
import '../styles/Challenge.scss';
import ChallengeTitle from '../components/challenge/ChallengeTitle';
import ChallengeGoal from '../components/challenge/ChallengeGoal';
import Header from '../components/Header';
import ChallengeGraph from '../components/challenge/ChallengeGraph';

const Challenge = () => {
  return (
    <div className="Challenge" style={{ paddingBottom: '20%' }}>
      <div id="backgroundCircle"></div>
      <div className="challengContent">
        <Header />
        <ChallengeTitle />
        <ChallengeGoal value={7200} max={10000} />
        <ChallengeGraph />
      </div>
    </div>
  );
};

export default Challenge;
