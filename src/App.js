import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {
  const [users, setUser] = useState ([
    {name: 'Ed', message: 'Hello there'},
    {name: 'John', message: 'I am jon snow'},
    {name: 'traersy', message: 'im awesome'}
  ]);
  /*const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count +1);
    setRed(!isRed);
  };*/

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message = {user.message}/>
      ))}
    </div>
  );
}

export default App;