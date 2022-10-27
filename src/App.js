import { useState } from 'react';
import { questions } from '../src/data'
import './App.scss';
import { Game } from './Game/Game';
import { Result } from './Result/Result';

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {step !== questions.length ?
        <Game
          step={step}
          questions={questions}
          question={question}
          onClickVariant={onClickVariant} /> :
        <Result correct={correct} questions={questions} />}
    </div>
  );
}

export default App;