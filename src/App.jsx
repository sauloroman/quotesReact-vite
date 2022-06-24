import { useState } from 'react';
import Card from "./components/Card"
import quotes from './quotes.json';

const App = () => {

  const colors = ['#40407a', '#218c74', '#ff5252', '#ff793f', '#227093', '#ffb142', '#33d9b2', '#706fd3', '#34ace0', '#d1ccc0', '#b33939', '#cc8e35'];
  const [color, setColor ] = useState(colors[0]);
  const [quoteScreen, setQuoteScreen] = useState( quotes[0]);

  return (
    <div className="container" style={{ backgroundColor: color}}>
     <Card 
      quotes = { quotes }
      colors = { colors }
      color = {color}
      setColor = { setColor }
      quoteScreen = {quoteScreen}
      setQuoteScreen = { setQuoteScreen }
     />
    </div>
  )
}

export default App