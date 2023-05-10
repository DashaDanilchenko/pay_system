const Card = ({card}) => {

  const {id, number, data, balance,  surname, name, patronymic} = card

  return (
    <div className="card_pay"  onClick={() => console.log({id})}>
      <p>{number}</p>
      <p>{data}</p>
      <p>{balance
      ? balance
      : `${surname} ${name} ${patronymic}`
      }</p>
    </div>
  )
}

export default Card