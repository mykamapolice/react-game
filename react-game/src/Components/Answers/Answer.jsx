import React, {useEffect, ReactElement} from 'react';

function Answer(props) {

    useEffect(() => {
        const setKey = (event) => {
            if (event.key === ' ') {
                console.log('space')
            } else {
                const btn = document.querySelector(`#${event.key}`)
                if(btn !== null) {
                    btn.click()
                }
            }
        }
        document.addEventListener('keydown', setKey);
    }, []);

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
