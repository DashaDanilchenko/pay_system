const CardPayOn = ({card, setIdOn, setOnNumberCard, setName}) => {

  const {id, number, data, balance, name, surname, patronymic} = card

  const dataCard = (id, number, surname, name, patronymic) => {
    setIdOn(id)
    setOnNumberCard(number.number)
    setName(`${surname.surname} ${name.name} ${patronymic.patronymic}`)
  }

  return (
    <div className="card_pay" onClick={() => dataCard({id}, {number}, {surname}, {name}, {patronymic})}>
      <p>{number}</p>
      <p>{data}</p>
      <p>
        {balance
        ? balance
        :`${surname} ${name} ${patronymic}`}
      </p>
    </div>
  )
}

export default CardPayOn