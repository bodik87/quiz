import React from 'react'
import AllRight from '../../src/assets/allRight.png'

export const Result = ({ questions, correct }) => {
  return (
    <div className="result">

      <h2>Вірні відповіді {correct} з {questions.length}</h2>
      {correct === questions.length ?
        <div>
          <h3>Все вірно! Молодець!</h3>
          <img src={AllRight} />
        </div> : null}

      <a href='/'>
        <button>Спробувати знову</button>
      </a>
    </div>
  )
}