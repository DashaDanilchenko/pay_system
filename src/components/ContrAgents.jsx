
import Card from "./listPay/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCardCA, delCardCA } from "../store/counterAgentsSlice";
import { useState } from "react";

const ContrAgents = () => {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [patronymic, setPatronymic] = useState('')

  const counterAgent = useSelector (state => state.counterAgent.counterAgent)
  const dispatch = useDispatch()

  const createCardCA = () => {
    dispatch(addCardCA({name, surname, patronymic}))
    setSurname('')
    setName('')
    setPatronymic('')
  }

  const editCardCA = (id, surname, name, patronymic) => {
    setSurname(surname)
    setName(name)
    setPatronymic(patronymic)
    dispatch(delCardCA(id))
  }

  return (
    <div>
      <div className="card_container">
      <form>
      <label htmlFor="surname">
      Surname : <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
      </label> 
      <label htmlFor="name">
        Name : <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <label htmlFor="patronymic">
      Patronymic : <input type="text" id="patronymic" name="patronymic" value={patronymic} onChange={(e) => setPatronymic(e.target.value)}/>
      </label> 
        <button onClick={createCardCA}>Add new card</button>
      </form>
        {counterAgent.map((card) =>
        <div key={card.id}> 
          <Link to={`/${card.id}`}>
            <Card card={card} />
          </Link>
            <button onClick={() => dispatch(delCardCA(card.id))}>delete</button>
            <button onClick={() => editCardCA(card.id, card.surname, card.name, card.patronymic)}>edit</button>
        </div>
       )}
      </div>
    </div> 
  )
}

export default ContrAgents