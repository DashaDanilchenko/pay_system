const CardPayFrom = ({card, setIdFrom, setSummaFrom, setFromNumberCard}) => {

const {id, number, data, balance} = card

const dataCard = (id, balance) => {
  setIdFrom(id)
  setSummaFrom(balance.balance)
  setFromNumberCard(number.number)
}

  return (
    <div className="card_pay" onClick={() => dataCard({id}, {balance}, {number})}>
      <p>{number}</p>
      <p>{data}</p>
      <p>{balance}</p>
    </div>
  )
}

export default CardPayFrom