import { useSelector } from "react-redux"
import CardPayOn from "./CardPayOn"

const CounterAgentsPay = ({setIdOn, setOnNumberCard, setName}) => {

const cards = useSelector(state => state.cards.cards)
const counterAgent = useSelector (state => state.counterAgent.counterAgent)
console.log(counterAgent)

  return (
    <div className="card_container">
      {cards.map((card) => 
      <CardPayOn 
      key={card.id} 
      card={card} 
      setIdOn={setIdOn}
      setOnNumberCard={setOnNumberCard}
      setName={setName}
      />)}
      {counterAgent.map((card) => 
      <CardPayOn 
      key={card.id} 
      card={card} 
      setIdOn={setIdOn}
      setOnNumberCard={setOnNumberCard}
      setName={setName}
      />)}
    </div>
  )
}

export default CounterAgentsPay