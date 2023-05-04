const CardPayFrom = ({card, setIdFrom}) => {

const {id, number, data, balance} = card

  return (
    <div className="card_pay" onClick={() => setIdFrom({id})}>
      <p>{number}</p>
      <p>{data}</p>
      <p>{balance}</p>
    </div>
  )
}

export default CardPayFrom