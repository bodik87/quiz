import { useState } from 'react';
import { questions } from '../src/data'
import { Game } from './Game/Game';
import { Modal } from './Modal/Modal';
import { Result } from './Result/Result';
import './App.scss';

function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = (e) => {
    e.stopPropagation()
    setOpen(!open)
  }

  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1)
    if (index === question.correct) setCorrect(correct + 1)
  }

  return (
    <>
      <div className={`App ${open ? 'blured' : ''}`}>
        {step !== questions.length ?
          <>
            <Game
              step={step}
              questions={questions}
              question={question}
              onClickVariant={onClickVariant} />
            <button className="open-modal-btn" onClick={handleOpen} >🎲 Пiдказка</button>
          </> :
          <Result correct={correct} questions={questions} />
        }

      </div>
      <Modal
        open={open}
        handleOpen={handleOpen}>
        {question?.variants[question.correct]}
      </Modal>
    </>
  );
}

export default App;