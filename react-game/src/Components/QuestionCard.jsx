import React from 'react'

const QuestionCard = ({
                                           question,
                                           answers,
                                           callback,
                                           userAnswer,
                                           questionNr,
                                           totalQuestions,
                                       }) =>  {
    return (
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <div key = {answer}>
                        <button disabled={userAnswer ? true: false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
