const Card = ({card}) => {

  const {id, number, data, balance,  surname, name, patronymic, my} = card

  return (
    <div className="card_pay"  onClick={() => console.log({id})}>
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