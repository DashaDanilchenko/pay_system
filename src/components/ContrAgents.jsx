
import Card from "./listPay/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delCardCA } from "../store/counterAgentsSlice";

const ContrAgents = () => {

  const counterAgent = useSelector (state => state.counterAgent.cards)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="card_container">
        {counterAgent.map((card) =>
        <div key={card.id}> 
          <Link to={`/${card.id}`}>
            <Card card={card} />
          </Link>
            <button onClick={() => dispatch(delCardCA(card.id))}>delete</button>
        </div>
       )}
      </div>
      <button>Add new card</button>
    </div> 
  )
}

export default ContrAgents