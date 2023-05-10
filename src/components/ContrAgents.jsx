
import Card from "./listPay/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCardCA, delCardCA } from "../store/counterAgentsSlice";
import { useState } from "react";

const ContrAgents = () => {

  const [name, setName] = useState('')

  const counterAgent = useSelector (state => state.counterAgent.counterAgent)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="card_container">
      <div>
      <label htmlFor="name">
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>  
        <button onClick={() => dispatch(addCardCA({name}))}>Add new card</button>
      </div>
        {counterAgent.map((card) =>
        <div key={card.id}> 
          <Link to={`/${card.id}`}>
            <Card card={card} />
          </Link>
            <button onClick={() => dispatch(delCardCA(card.id))}>delete</button>
        </div>
       )}
      </div>
    </div> 
  )
}

export default ContrAgents