
import Card from "./listPay/Card";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { counterAgent } from "../data"

const ContrAgents = () => {

  // const counterAgent = useSelector (state => state.counterAgent.counterAgent)

  return (
    <div>
      <div className="card_container">
        {counterAgent.map((card) =>
        <div key={card.id}> 
          <Link to={`/${card.id}`}>
            <Card card={card} />
          </Link>
            <button>delete</button>
        </div>
       )}
      </div>
      <button>Add new card</button>
    </div> 
  )
}

export default ContrAgents