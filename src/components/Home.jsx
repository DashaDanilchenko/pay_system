import { useState } from "react"
import CardsPay from "./listPay/CardsPay"
import CounterAgentsPay from "./listPay/CounterAgentsPay"
import { useDispatch } from "react-redux"
import { minusBalance, plusBalance } from "../store/cardsSlice"

const Home = () => {

  const [summa, setSumma] = useState(0)
  const [appointment, setAppointment] = useState('')

  const [idFrom, setIdFrom] = useState(null)
  const [idOn, setIdOn] = useState(null)

  const dispatch = useDispatch()

const pay = () => {
  dispatch(plusBalance({idOn, summa}))
  dispatch(minusBalance({idFrom, summa}))
  setSumma(0)
}

// localStorage.clear()

  return (
    <div>
      <p>from card:</p>
      <CardsPay setIdFrom={setIdFrom}/>
      <p>on card:</p>
      <CounterAgentsPay setIdOn={setIdOn}/>
      <form>
        <label htmlFor="summa">
        Summa : <input type="text" id="summa" name="summa" value={summa} onChange={(e) => setSumma(Number(e.target.value))}/>
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