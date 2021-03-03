import React from 'react'
import './questionCard.css'
import Answer from "./Answers/Answer";

const QuestionCard = ({
                                           question,
                                           answers,
                                           callback,
                                           userAnswer,
                                           questionNr,
                                           totalQuestions,
                                       }) =>  {

    const ans = answers.map( answer => {
        return <Answer answer = {answer} callback={callback} userAnswer={userAnswer}/>
    })


    return (
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {ans}
            </div>
        </div>
    )
}

export default QuestionCard
