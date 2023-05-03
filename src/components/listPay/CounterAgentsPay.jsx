import { useSelector } from "react-redux"
import CardPayOn from "./CardPayOn"

const CounterAgentsPay = () => {

const counterAgent = useSelector(state => state.counterAgent.counterAgent)
const cards = useSelector(state => state.cards.cards)
console.log(counterAgent)

  return (
    <div className="card_container">
      {counterAgent.map((card) => <CardPayOn key={card.id} card={card}/>)}
      {cards.map((card) => <CardPayOn key={card.id} card={card}/>)}
    </div>
  )
}

export default CounterAgentsPay