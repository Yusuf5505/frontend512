import './Result.css';

function Result({ correct, questions }) {
    return (
        <div>
            <p className="text">
                Вы отгадали <b>{correct}</b>{' '}
                {correct % 10 === 1 && correct % 100 !== 11
                    ? 'ответ'
                    : correct % 10 >= 2 &&
                        correct % 10 <= 4 &&
                        (correct % 100 < 10 || correct % 100 >= 20)
                        ? 'ответа'
                        : 'ответов'}{' '}
                из <b>{questions.length}</b>
            </p>
            <a href="/" className='but'>Поробовать снова</a>
        </div>
    )
}
export default Result;