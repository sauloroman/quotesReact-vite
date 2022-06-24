const Button = ({
  setQuoteScreen,
  color,
  setColor,
  colors,
  quotes
}) => {

  const randomNumber = array => Math.round( Math.random() * (array.length - 1) );

  const handleClick = () => {
    setColor( colors[ randomNumber( colors ) ] );
    setQuoteScreen( quotes[ randomNumber( quotes ) ] )
  }

  return (
    <div className="btnBox">
      <button 
        onClick={ handleClick }
        className="btn" 
        style={{ backgroundColor: color}}>Try again!</button>
    </div>
  )
}

export default Button;