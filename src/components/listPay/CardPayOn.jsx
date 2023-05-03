const CardPayOn = ({card}) => {

  const {id, number, data, balance, name} = card

  return (
    <div className="card_pay" onClick={() => console.log(id, '=====> on card')}>
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