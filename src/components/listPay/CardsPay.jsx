import { useSelector } from "react-redux"
import CardPayFrom from "./CardPayFrom"

const CardsPay = ({setIdFrom}) => {

    const cards = useSelector(state => state.cards.cards)

  return (
    <div className="card_container">
      {cards.map((card) => <CardPayFrom key={card.id} card={card} setIdFrom={setIdFrom}/>)}
    </div>
  )
}

export default CardsPay