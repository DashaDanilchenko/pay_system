import { useSelector } from "react-redux"

const CardsPay = () => {

    const cards = useSelector(state => state.cards.cards)
    console.log(cards)

  return (
    <div>CardsPay</div>
  )
}

export default CardsPay