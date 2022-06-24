import Button from "./Button";

const Card = ({
  quotes, 
  colors, 
  color,
  setColor,
  quoteScreen,
  setQuoteScreen
}) => {

  const { quote, author } = quoteScreen;

  return (
    <div className="card">
      
      <figure className="card__imgBox" style={{ backgroundColor: color}}>
        <img src="/src/img/undraw_reading_re_29f8.svg" alt="Reading" className="card__img" />
      </figure>

      <div className="card__info">
        <div className="card__icon">
          <ion-icon name="chatbox-ellipses-outline" style={{ color: color}}></ion-icon>
        </div>

        <div className="card__text" style={{ color: color}}>
          <q className="card__quote">{quote}</q>
          <cite className="card__author">&mdash; {author}</cite>
        </div>

        <Button 
          setQuoteScreen = { setQuoteScreen }
          color = { color }
          setColor = { setColor }
          colors = { colors }
          quotes = { quotes}
        />

      </div>

    </div>
  )
}

export default Card