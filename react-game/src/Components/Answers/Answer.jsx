import React, { useEffect } from 'react';

function Answer({ answer, callback, userAnswer }) {
  useEffect(() => {
    const setKey = (event) => {
      if (event.key !== ' ') {
        const btn = document.querySelector(`#${event.key}`);
        if (btn !== null) {
          btn.click();
        }
      }
    };
    document.addEventListener('keydown', setKey);
  }, []);

  return (
    <div key={answer.question}>
      <button
        type="submit"
        id={answer.hotkey}
        className="card"
        disabled={!!userAnswer}
        value={answer.question}
        onClick={callback}
        onKeyPress={callback}
      >
        <span>
          {`${answer.hotkey} ${answer.question}` }
        </span>
      </button>
    </div>
  );
}

export default Answer;
