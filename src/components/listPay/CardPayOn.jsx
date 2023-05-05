const CardPayOn = ({card, setIdOn, setOnNumberCard, setName}) => {

  const {id, number, data, balance, name} = card

  const dataCard = (id, number, name) => {
    setIdOn(id)
    setOnNumberCard(number.number)
    setName(name.name)
  }

  return (
    <div className="card_pay" onClick={() => dataCard({id}, {number}, {name})}>
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