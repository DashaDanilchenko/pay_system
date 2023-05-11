const CardPayOn = ({card, setIdOn, setOnNumberCard, setName, setBalance}) => {

  const {id, number, data, balance, name, surname, patronymic} = card

  const dataCard = (id, number, surname, name, patronymic, balance) => {
    setIdOn(id)
    setOnNumberCard(number.number)
    setName(`${surname.surname} ${name.name} ${patronymic.patronymic}`)
    setBalance(balance.balance)
  }

  return (
    <div className="card_pay" onClick={() => dataCard({id}, {number}, {surname}, {name}, {patronymic}, {balance})}>
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