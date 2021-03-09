import React from 'react';
import './questionCard.css';
import Answer from './Answers/Answer';

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const ans = answers.map((answer) => (
    <Answer
      answer={answer}
      callback={callback}
      userAnswer={userAnswer}
    />
  ));

  return (
    <div>
      <p className="number">
        s
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
