const CardPayOn = ({card, setIdOn}) => {

  const {id, number, data, balance, name} = card

  return (
    <div className="card_pay" onClick={() => setIdOn(id)}>
      <p>{number}</p>
      <p>{data}</p>
      <p>
        {balance
        ? balance
        :name}
      </p>
    </div>
  )
}

export default CardPayOn