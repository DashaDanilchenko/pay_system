const Card = ({card}) => {

  const {id, number, data, balance, name} = card

  return (
    <div className="card_pay"  onClick={() => console.log({id})}>
      <p>{number}</p>
      <p>{data}</p>
      <p>{balance
      ? balance
      : name
      }</p>
    </div>
  )
}

export default Card