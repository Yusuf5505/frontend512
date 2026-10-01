import { useState } from 'react';
import './App.css';
import Quizzis from './components/Quizzis';
const questions = [
  {
    title: 'В каком месте HTML документа может располагаться JavaScript код?',
    variants: ['В секциях <head> и <body>', 'В секции <html>', 'В блоке <div>'],
    correct: 0
  },
  {
    title: 'Выберите комментарий использующийся в JavaScript:',
    variants: ['// Я являюсь комментарием', '<!-- Я являюсь комментарием -->', '# Я являюсь комментарием'],
    correct: 0
  },
  {
    title: 'Чувствителен ли JavaScript к регистру символов?',
    variants: ['Нет', 'Да', 'Не всегда'],
    correct: 1
  },
  {
    title: 'Какое событие позволяет выполнять код после щелчка мыши?',
    variants: ['mouseout', 'mouseclick', 'onclick', 'onmouseclick'],
    correct: 2
  },
  {
    title: 'Выберите метод JavaScript позволяющий выполнять произвольный код через заданные промежутки времени:',
    variants: ['callCode()', 'timer()', 'setInterval()', 'setTimeOut()'],
    correct: 3
  },
  {
    title: 'Укажите название встроенного JavaScript объекта для работы с датой и временем',
    variants: ['date', 'calendar', 'datetime', 'timeDate'],
    correct: 0
  },
  {
    title: 'Выберите JavaScript команду для вызова окна оповещения:',
    variants: ['window()', 'confirm()', 'alert()', 'show()'],
    correct: 2
  },
]
function App() {
  const [step, setStep]=useState(0);
  const question=questions[step];

  const onClickVariant=(variants) =>{
    setStep(step +1);

    if (variants ===question.correct) {
      setCorrect(correct+1);
    }
  }
  const [correct,setCorrect]=useState(0);
  return (
    <div className="main">
      <Quizzis question={question}  onClickVariant={ onClickVariant}
      questions={questions}
      step={step}/>
    </div>
  );
}

export default App;
