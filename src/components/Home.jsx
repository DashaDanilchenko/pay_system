import { useState } from "react"
import CardsPay from "./listPay/CardsPay"
import CounterAgentsPay from "./listPay/CounterAgentsPay"
import { useSelector } from "react-redux"

const Home = () => {

  const [summa, setSumma] = useState(0)
  const [appointment, setAppointment] = useState('')

  const counterAgent = useSelector(state => state.counterAgent.counterAgent)
  const cards = useSelector(state => state.cards.cards)

function pay (id_from, id_on) {

}

  return (
    <div>
      <p>from card:
        <CardsPay/>
      </p>
      <p>on card:
      <CounterAgentsPay/>
      </p>
      <form>
        <label htmlFor="summa">
        Summa : <input type="text" id="summa" name="summa" value={summa} onChange={(e) => setSumma(e.target.value)}/>
        </label>
        <label htmlFor="appointment">
        Appointment : <input type="text" id="appointment" name="appointment" value={appointment} onChange={(e) => setAppointment(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Home