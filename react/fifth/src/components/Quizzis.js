import './Quizzis.css';
// components/Quizzis.jsx
function Quizzis({ question,  onClickVariant }) {
  return (
    <div className="quiz">
      <h2>{question.title}</h2>
      <ul>
        {question.variants.map((variant, index) => (
          <li key={index} onClick={() =>onClickVariant(index)}>
            <button>{variant}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quizzis;