import { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState('')
  const getadvice = async () => {
    let response = await fetch('https://api.adviceslip.com/advice')
    let data = await response.json()
    setAdvice(data)
    console.log('hit')
  }
  useEffect(() => {
    getadvice()
  }, [advice])

 if(!advice) {
  return <h1>loading...</h1>
 }
  return (
    <div>
      <h1>create react app</h1>
      <p>{advice.slip.advice}</p>
      <button onClick={getadvice}>submit</button>
    </div>
  );
};
export default App;
