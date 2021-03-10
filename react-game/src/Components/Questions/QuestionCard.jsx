import React from 'react';
import './questionCard.css';
import Question from './Question/Question';

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const ans = answers.map((answer) => (
    <Question
      answer={answer}
      callback={callback}
      userAnswer={userAnswer}
    />
  ));

  return (
    <div>
      <p className="number">
        Question:
        {questionNr}
        {' '}
        /
        {totalQuestions}
        <p>hotkeys - ( a b c d space ) ENGLISH LAYOUT!!!</p>
      </p>
      <p>
        {' '}
        {question }
      </p>
      <div>
        {ans}
      </div>
    </div>
  );
};

export default QuestionCard;
