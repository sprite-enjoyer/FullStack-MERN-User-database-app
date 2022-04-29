import { useState, useEffect } from 'react';
import Axios from 'axios';
function App() {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setUserList([
        ...userList,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (
    <div className='App'>
      <div className='userDisplay'>
        {userList.map((user) => {
          return(
            <div className='userDiv'>
              <h2>Name: {user.name}</h2>
              <h2>Age: {user.age}</h2>
              <h2>UserName: {user.username}</h2>
            </div>
          )
        })}
      </div>
      <input Type = 'text' placeholder='Name' onChange={(e) => {setName(e.target.value)}}/>
      <input Type = 'number' placeholder='Age' onChange={(e) => {setAge(e.target.value)}}/>
      <input Type = 'text' placeholder='UserName' onChange={(e) => {setUsername(e.target.value)}}/>
      <button onClick={createUser}>Create User</button>

    </div>
  );
}

export default App;
