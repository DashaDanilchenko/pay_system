import { useDispatch } from "react-redux"
import { resetStylesOn, selectedCardOn } from "../../store/cardsSlice"
import { resetStylesOnCA, selectedCardOnCA } from "../../store/counterAgentsSlice"
import { useContext } from "react"
import Context from "../../Context"

const CardPayOn = ({card}) => {

  const {id, number, data, balance, my, name, surname, patronymic, colorOn} = card

  const dispatch = useDispatch()

  const {setIdOn, setOnNumberCard, setName, setBalance } = useContext(Context)

  const dataCard = (id, number, surname, name, patronymic, balance) => {
    setIdOn(id)
    setOnNumberCard(number.number)
    setName(`${surname.surname} ${name.name} ${patronymic.patronymic}`)
    setBalance(balance.balance)
    dispatch (resetStylesOn())
    dispatch (resetStylesOnCA())
    dispatch (selectedCardOn(id))
    dispatch (selectedCardOnCA(id))
  }

  return (
    <div className={`card_pay ${colorOn? 'color': ''}`} onClick={() => dataCard({id}, {number}, {surname}, {name}, {patronymic}, {balance})}>
      <p>{number}</p>
      <p>{data}</p>
      <p>
        {my
        ? balance
        :`${surname} ${name} ${patronymic}`}
      </p>
    </div>
  )
}

export default CardPayOn