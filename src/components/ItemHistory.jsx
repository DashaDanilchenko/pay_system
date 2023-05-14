import { useDispatch } from "react-redux"
import { deleteItemHistory } from "../store/historySlice"

const ItemHistory = ({item}) => {

const {from, on, summa, name, appointment, time, date, my, id} = item

const dispatch = useDispatch()

  return (
    <div className="item_history">
       <p>card transfer : {from}</p>
       <p>transfer to the card : {on}</p>
       <p>summa : {summa}</p>
       <p>the name of the recipient : {!my? name : "transfer of own money"}</p>
       <p>appointment : {appointment}</p>
       <p>date : {date}</p> 
       <p>time : {time}</p>
       <button onClick={() => dispatch(deleteItemHistory(id))}>delete</button>
    </div>
  )
}

export default ItemHistory