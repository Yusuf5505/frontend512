import './Quizzis.css';
import ProgressBar from './progress/ProgressBar';

function Quizzis({ question, onClickVariant, questions, step }) {
  // защита: показываем прогресс 100% на последнем экране
  const percent = Math.min(Math.round((step / questions.length) * 100), 100);

  if (!question) {
    return (
      <div className="quiz">
        <ProgressBar percent={100} />
        <h2>Квиз завершён!</h2>
      </div>
    );
  }

  return (
    <div className="quiz">
      <ProgressBar percent={percent} />   {/* ← было persent */}
      <h2>{question.title}</h2>
      <ul>
        {question.variants.map((variant, index) => (
          <li key={index} onClick={() => onClickVariant(index)}>
            <button>{variant}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quizzis;