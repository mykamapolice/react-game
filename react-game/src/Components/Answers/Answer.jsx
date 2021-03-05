import React, {useEffect, ReactElement} from 'react';

function Answer(props) {

    const handleAnswerChange = (e) => {
        if (e.key === 'y') {
            alert('The sky is your starting point!')
        } else if (e.key === 'n') {
            alert('The sky is your limit👀')
        }
    }

        useEffect(() => {
            window.addEventListener('keydown', handleAnswerChange);
        });

        return (
            <div key={props.answer.question}>
                    <button type="submit" id={props.answer.hotkey} className={"card"} disabled={props.userAnswer ? true : false}
                            value={props.answer.question} onClick={props.callback} onKeyPress={props.callback}>
                        <span dangerouslySetInnerHTML={{__html: `${props.answer.hotkey} ${props.answer.question}`}}/>
                    </button>
            </div>
        )
}

export default Answer
