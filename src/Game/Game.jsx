import React from 'react'

export const Game = ({ step, questions, question, onClickVariant }) => {

  const percentage = Math.round(step / questions.length * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((answer, index) =>
          <li
            key={index + answer}
            onClick={() => onClickVariant(index)}>
            {answer}
          </li>)}
      </ul>
    </>
  )
}