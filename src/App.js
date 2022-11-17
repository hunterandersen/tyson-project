import MyButton from "./components/MyButton.jsx";
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);
  /*
  const returnedArray = useState(0);
  const count = returnedArray[0];
  const setCount = returnedArray[1];
  */

  function updateCount(){
    setCount((curr) => {
      return curr + 1;
    });
    setCount((curr) => {
      return curr + 1;
    });
    setCount((curr) => {
      return curr + 1;
    });
    
  }

  return (
    <div>
      <MyButton count={count} handleButton={updateCount} />
      <MyButton count={count} handleButton={updateCount}/>
    </div>
  );
}

export default App;
