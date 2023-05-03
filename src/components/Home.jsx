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
  console.log(idOn)
  console.log(idFrom)
  dispatch(plusBalance({idOn}))
  dispatch(minusBalance({idFrom}))
}

  return (
    <div>
      <p>from card:
        <CardsPay setIdFrom={setIdFrom}/>
      </p>
      <p>on card:
      <CounterAgentsPay setIdOn={setIdOn}/>
      </p>
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