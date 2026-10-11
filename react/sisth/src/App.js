import Users from './components/users/Users';
import './App.css';
import { useState, useEffect } from 'react';
import Success from './components/success/Success';
function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setinvItes] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("https://www.myjsons.com/v/0f284975")
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      })
      .catch(err => {
        console.warn(err);
        alert("Ошибка при получение пользователя");

      })
  }, []);
  const onChangeValue = (event) => {
    setSearchValue(event.target.value)
  }
  const onClickIncite = (id) => {
    if (invites.includes(id)) {
      setinvItes(prev => prev.filter(ch => ch !== id));
    } else {
      setinvItes(prev => [...prev, id]);
    }
  };
  const onClickSendInvites = () => {
    setSuccess(true);
  }
  return (
    <div className="App">
      {
        success ? <Success count={invites.length} /> : <Users items={users} searchValue={searchValue} onChangeValue={onChangeValue} invites={invites} onClickIncite={onClickIncite} onClickSendInvites={onClickSendInvites} />
      }

    </div>
  );
}

export default App;
