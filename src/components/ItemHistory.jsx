const ItemHistory = ({item}) => {

const {from, on, summa, name, appointment, time, date} = item

  return (
    <div className="item_history">
       <p>card transfer : {from}</p>
       <p>transfer to the card : {on}</p>
       <p>summa : {summa}</p>
       <p>the name of the recipient : {name? name : "transfer of own money"}</p>
       <p>appointment : {appointment}</p>
       <p>date : {date}</p> 
       <p>time : {time}</p>
    </div>
  )
}

export default ItemHistory