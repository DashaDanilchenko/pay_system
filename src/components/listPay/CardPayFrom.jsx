import { useDispatch } from "react-redux"
import { selectedCardFrom } from "../../store/cardsSlice"

const CardPayFrom = ({card, setIdFrom, setSummaFrom, setFromNumberCard}) => {

const {id, number, data, balance, colorFrom} = card

const dispatch = useDispatch()

const dataCard = (id, balance, number) => {
  console.log(card)
  setIdFrom(id)
  setSummaFrom(balance.balance)
  setFromNumberCard(number.number)
  dispatch (selectedCardFrom(id))
}

  return (
    <div className={`card_pay ${colorFrom? 'color': ''}`} onClick={() => dataCard({id}, {balance}, {number})}>
      <p>{number}</p>
      <p>{data}</p>
      <p>{balance}</p>
    </div>
  )
}

export default CardPayFrom