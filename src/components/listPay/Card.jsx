const Card = ({card}) => {

  const { number, data, balance,  surname, name, patronymic, my} = card

  return (
    <div className="card_pay">
      <p>{number}</p>
      <p>{data}</p>
      <p>{my
      ? balance
      : `${surname} ${name} ${patronymic}`
      }</p>
    </div>
  )
}

export default Card