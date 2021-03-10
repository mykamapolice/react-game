import React from 'react';
import { menu } from '../../styles';
import DifficultySet from './SetSettings/DifficultySet';
import TopicSet from './SetSettings/TopicSet';
import NumberOfQuestions from './SetSettings/NumberOfQuestions';

const GameSettings = ({
  difficulty,
  setAmount,
  amount,
  category,
  setCategory,
  setDifficulty,
  setSettings,
  settings,
}) => (
  <div style={menu}>
    <DifficultySet difficulty={difficulty} setdif={setDifficulty} classname="difficulty" />
    <TopicSet setTpc={setCategory} topic={category} />
    <NumberOfQuestions amount={amount} setAmount={setAmount} />
    <button type="button" className="" onClick={() => setSettings(!settings)}>
      To Main Menu
    </button>
  </div>
);

export default GameSettings;
