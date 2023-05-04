const CardPayFrom = ({card, setIdFrom, setSummaFrom}) => {

const {id, number, data, balance} = card

const dataCard = (id, balance) => {
  setIdFrom(id)
  setSummaFrom(balance.balance)
}

  return (
    <div className="card_pay" onClick={() => dataCard({id}, {balance})}>
      <p>{number}</p>
      <p>{data}</p>
      <p>{balance}</p>
    </div>
  )
}

export default CardPayFrom