const CardPayFrom = ({card}) => {

const {id, number, data, balance} = card

  return (
    <div className="card_pay" onClick={() => console.log(id, '=====> from card')}>
      <p>{number}</p>
      <p>{data}</p>
      <p>{balance}</p>
    </div>
  )
}

export default CardPayFrom