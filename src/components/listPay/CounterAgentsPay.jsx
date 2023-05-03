import { useSelector } from "react-redux"
import CardPayOn from "./CardPayOn"
import { counterAgent } from "../../data"

const CounterAgentsPay = ({setIdOn}) => {

const cards = useSelector(state => state.cards.cards)

  return (
    <div className="card_container">
      {cards.map((card) => <CardPayOn key={card.id} card={card} setIdOn={setIdOn}/>)}
      {counterAgent.map((card) => <CardPayOn key={card.id} card={card}/>)}
    </div>
  )
}

export default CounterAgentsPay