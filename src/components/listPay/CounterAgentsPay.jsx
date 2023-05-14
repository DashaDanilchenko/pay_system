import { useSelector } from "react-redux"
import CardPayOn from "./CardPayOn"

const CounterAgentsPay = () => {

const cards = useSelector(state => state.cards.cards)
const counterAgent = useSelector (state => state.counterAgent.counterAgent)

  return (
    <div className="card_container">
      {cards.map((card) => 
      <CardPayOn 
      key={card.id} 
      card={card} 
      // setIdOn={setIdOn}
      // setOnNumberCard={setOnNumberCard}
      // setName={setName}
      // setBalance={setBalance}
      />)}
      {counterAgent.map((card) => 
      <CardPayOn 
      key={card.id} 
      card={card} 
      // setIdOn={setIdOn}
      // setOnNumberCard={setOnNumberCard}
      // setName={setName}
      // setBalance={setBalance}
      />)}
    </div>
  )
}

export default CounterAgentsPay