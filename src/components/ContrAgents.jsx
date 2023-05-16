
import Card from "./listPay/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCardCA, delCardCA } from "../store/counterAgentsSlice";
import { useForm } from "react-hook-form";

const ContrAgents = () => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    mode: 'onChange'
  })

  const counterAgent = useSelector (state => state.counterAgent.counterAgent)
  const dispatch = useDispatch()

  function resetDataCA () {
    reset({
      number: '',
      data: '',
      surname: '',
      name: '',
      patronymic: '',
    })
  }

  const createCardCA = (card) => {
    const {number, data, name, surname, patronymic} = card
    dispatch(addCardCA({number, data, name, surname, patronymic}))
    resetDataCA()
  }

  const editCardCA = (id, number, data, surname, name, patronymic) => {
    reset({
      number,
      data,
      surname,
      name,
      patronymic,
    })
    dispatch(delCardCA(id))
  }

 

  return (
    <div>
      <div className="card_container">
      <form onSubmit={handleSubmit(createCardCA)}>
      <label htmlFor="number">
      Number : <input type="number" id="number" name="number"  {... register('number')}/>
      </label>
      <label htmlFor="data">
      Data : <input type="text" id="data" name="data" {... register('data')}/>
      </label>
      <label htmlFor="surname">
      Surname : <input type="text" id="surname" name="surname"  {... register('surname')}/>
      </label> 
      <label htmlFor="name">
        Name : <input type="text" id="name" name="name" {... register('name')}/>
      </label>
      <label htmlFor="patronymic">
      Patronymic : <input type="text" id="patronymic" name="patronymic"  {... register('patronymic')}/>
      </label> 
        <button>Add new card</button>
      </form>
        {counterAgent.map((card) =>
        <div key={card.id}> 
          <Link to={`/${card.id}`}>
            <Card card={card} />
          </Link>
            <button onClick={() => dispatch(delCardCA(card.id))}>delete</button>
            <button onClick={() => editCardCA(card.id, card.number, card.data, card.surname, card.name, card.patronymic)}>edit</button>
        </div>
       )}
      </div>
    </div> 
  )
}

export default ContrAgents