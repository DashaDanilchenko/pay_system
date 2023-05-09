import { useState } from "react"
import CardsPay from "./listPay/CardsPay"
import CounterAgentsPay from "./listPay/CounterAgentsPay"
import { useDispatch } from "react-redux"
import { minusBalance, plusBalance } from "../store/cardsSlice"
import { newItemHistory } from "../store/historySlice"

const Home = () => {

  const [summa, setSumma] = useState(0)
  const [appointment, setAppointment] = useState('')

  const [idFrom, setIdFrom] = useState(null)
  const [idOn, setIdOn] = useState(null)
  const [summaFrom, setSummaFrom] = useState(null)

  const [fromNumberCard, setFromNumberCard] = useState('')
  const [onNumberCard, setOnNumberCard] = useState('')
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const pay = () => {
  if (summa <= 0 || typeof summa !== Number) {
    return alert('Enter summa')
  }
  if (idOn.id === idFrom.id) {
    return alert('Choose another card')
  }
  if (summaFrom <= summa) {
    return alert('Not enough money')
  }
  
  dispatch (plusBalance({idOn, summa}))
  dispatch (minusBalance({idFrom, summa}))
  dispatch (newItemHistory({fromNumberCard, onNumberCard, summa, name, appointment}))
  setFromNumberCard('')
  setOnNumberCard('')
  setName('')
  setSumma(0)
  setAppointment('')
}



// localStorage.clear()


  return (
    <div>
      <p>from card:</p>
      <CardsPay 
      setIdFrom={setIdFrom} 
      setSummaFrom={setSummaFrom}
      setFromNumberCard={setFromNumberCard}
      setAppointment={setAppointment}
      />
      <p>on card:</p>
      <CounterAgentsPay 
      setIdOn={setIdOn}
      setOnNumberCard={setOnNumberCard}
      setName={setName}
      />
      <form>
        <label htmlFor="summa">
        Summa : <input type="text" id="summa" name="summa" value={summa} onChange={(e) => setSumma(e.target.value)}/>
        </label>
        <label htmlFor="appointment">
        Appointment : <input type="text" id="appointment" name="appointment" value={appointment} onChange={(e) => setAppointment(e.target.value)}/>
        </label>
        <button type="button" onClick={pay}>Submit</button>
      </form>
    </div>
  )
}

export default Home