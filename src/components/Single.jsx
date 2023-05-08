import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Single = () => {

  const {id}= useParams()

  const card = useSelector(state => state.cards.cards.filter((item) => item.id === id))
  console.log (card)

  return (
    
      <div className="card_pay" >
      <p>{card.number}</p>
      <p>{card.data}</p>
      <p>{card.balance
      ? card.balance
      : card.name
      }</p>
    </div>

    
  )
}

export default Single