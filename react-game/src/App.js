import React, {useState, useEffect} from 'react';
import QuestionCard from '../src/Components/QuestionCard'
import {fetchQuizQuestions} from "./API";
import './App.module.css'
import useSound from 'use-sound';
import btnSound from './music/btn.mp3'
import bcgSound from './music/bcg.mp3'
import {menu} from "./styles";
import Statistics from "./Components/Statistics";
import SoundSettings from "./Components/SoundSettings";
import GameSettings from "./Components/GameSettings";



const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [difficulty, setDifficulty] = useState('easy');
    const [category, setCategory] = useState('9');
    const [settings, setSettings] = useState(false);
    const [amount, setAmount] = useState(10);
    const [statistic, setStatistic] = useState(false);
    const [soundSettings, setSoundSettings] = useState(false);

    const [play] = useSound(btnSound);

    const [playActive] = useSound(
        bcgSound,
        {volume: 0.25}
    )

    // useEffect(() => {
    //   playActive()
    // }, [])

    console.log('Stat: ' + statistic)
    console.log('soundSettings: ' + soundSettings)
    console.log('settings: ' + settings)

    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuizQuestions(
            amount,
            difficulty,
            category,
            amount
        );
        setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)
    }


    const checkAnswer = (e) => {
        play()
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
        console.log(number, amount)
        const nextQuestion = number + 1;

        if (nextQuestion === amount) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }


    return (
        <>
            <h1>REACT QUIZ</h1>
            {(!settings  && !statistic && !soundSettings) ?
                <>
                    {gameOver || userAnswers.length === amount ? (
                        <div style={menu} className="menu">
                            <button className='start' onClick={startTrivia}>
                                Start
                            </button>
                            <button className='' onClick={() => setSettings(!settings)}>
                                Game Settings
                            </button>
                            <button className='' onClick={() => setSoundSettings(!soundSettings)}>
                                Sound Settings
                            </button>
                            <button className='' onClick={() => setStatistic(!statistic)}>
                                Statistics
                            </button>
                        </div>

                    ) : null}
                    {!gameOver ? <p className='score'>Score: {score}</p> : null}
                    {loading ? <p>Loading Questions...</p> : null}
                    {!loading && !gameOver && (
                        <QuestionCard
                            questionNr={number + 1}
                            totalQuestions={amount}
                            question={questions[number].question}
                            answers={questions[number].answers}
                            userAnswer={userAnswers ? userAnswers[number] : undefined}
                            callback={checkAnswer}
                        />
                    )}
                    {!gameOver && !loading && userAnswers.length === number + 1 && number !== amount - 1 ? (
                        <button className='next' onClick={nextQuestion}>
                            Next Question
                        </button>
                    ) : null}
                </>
                : statistic ?
                    <Statistics setStatistic={setStatistic} statistic={statistic}/>
                : soundSettings ?
                  <SoundSettings setSoundSettings={setSoundSettings} soundSettings={soundSettings}/>
                :
                  <GameSettings difficulty={difficulty} setDifficulty={setDifficulty}
                                setCategory={setCategory} category={category}
                                amount={amount} setAmount={setAmount}
                                setSettings={setSettings} settings={settings}/>
              }
        </>
    );
};

export default App;
