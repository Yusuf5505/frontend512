import { useParams } from 'react-router-dom';

function Abouthinfo() {
  const { id } = useParams();   // ← скобки обязательны

  return (
    <div>
      <h2>Инфо о: {id}</h2>
    </div>
  );
}

export default Abouthinfo;