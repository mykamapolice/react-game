import React, {useState, useEffect} from 'react';
import QuestionCard from '../src/Components/QuestionCard'
import {fetchQuizQuestions} from "./API";
import './App.module.css'
import useSound from 'use-sound';
import btnSound from './music/btn.mp3'
import bcgSound from './music/bcg.mp3'
import {DifficultySet} from "./Components/DifficultySet";
import {menu, difficulty} from "./styles";


const TOTAL_QUESTIONS = 10;


const Difficulty =  {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard"
}


const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState('easy');

  const [play] = useSound(btnSound);

  const [playActive] = useSound(
      bcgSound,
      { volume: 0.25 }
  )

  // useEffect(() => {
  //   playActive()
  // }, [])


  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        difficulty
    );

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }



  const checkAnswer = (e) => {
    play()
    console.log(difficulty)
    if (!gameOver) {
      const answer = e.currentTarget.value

      const correct = questions[number].correct_answer === answer

      if (correct) setScore(prev => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }

      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }


  return (
      <>
        <h1>REACT QUIZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <div style={menu} className="menu">
              <button className='start' onClick={startTrivia}>
                Start
              </button>
              <button className='' onClick={playActive}>
                Settings
              </button>
              <DifficultySet setdif={setDifficulty} classname="difficulty"/>
              <button className=''>
                Statistics
              </button><button className=''>
              Topics
            </button>
            </div>

        ) : null}
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
            <QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
            <button className='next' onClick={nextQuestion}>
              Next Question
            </button>
        ) : null}
      </>
  );
};

export default App;
