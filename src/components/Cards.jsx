import { useDispatch, useSelector } from "react-redux"
import Card from "./listPay/Card"
import { Link } from "react-router-dom"
import { delCard } from "../store/cardsSlice"

const Cards = () => {

  const cards = useSelector(state => state.cards.cards)
  const dispatch = useDispatch()

  return (
    <div>
       <div className="card_container">
        {cards.map((card) =>
        <div key={card.id}> 
        <Link to={`/${card.id}`}>
          <Card card={card} />
        </Link>
        <button onClick={() => dispatch(delCard(card.id))}>delete</button>
        </div> 
        )}
      </div>

      <button>Add new card</button>
    </div>
  )
}

export default Cards