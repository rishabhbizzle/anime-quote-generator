import { useState, useEffect } from 'react';
import Quote from "./components/Quote";


function App() {

  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  });

  const generate = async () =>{
    setQuote(await fetchQuote());

  }

  const fetchQuote = async () =>{
    return await 
    fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
  }

  useEffect(async() => {
    setQuote(await fetchQuote());
  }, [])
  

  return (
    <div className="App">
      <Quote quote={quote}/>
      <button onClick={generate}>Get New Quote</button>
    </div>
  );
}

export default App;
