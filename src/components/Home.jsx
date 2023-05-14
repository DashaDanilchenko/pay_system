import { useState } from "react"
import CardsPay from "./listPay/CardsPay"
import CounterAgentsPay from "./listPay/CounterAgentsPay"
import { useDispatch } from "react-redux"
import { minusBalance, plusBalance, resetStylesFrom, resetStylesOn } from "../store/cardsSlice"
import { newItemHistory } from "../store/historySlice"
import { resetStylesOnCA } from "../store/counterAgentsSlice"
import Context from "../Context"

const Home = () => {

  const [summa, setSumma] = useState(0)
  const [appointment, setAppointment] = useState('')

  const [idFrom, setIdFrom] = useState(null)
  const [idOn, setIdOn] = useState(null)
  const [summaFrom, setSummaFrom] = useState(null)

  const [fromNumberCard, setFromNumberCard] = useState('')
  const [onNumberCard, setOnNumberCard] = useState('')
  const [name, setName] = useState('')
  const [isMy, setIsMy] = useState(false)
  const [isError, setIsError] = useState(false)

  const dispatch = useDispatch()

  function conditions() {
    if (summa <= 0 ) {
      setIsError(true)
      return alert('Enter summa')
    }
    if (idOn.id === idFrom.id) {
      setIsError(true)
      return alert('Choose another card')
    }
    if (summaFrom <= summa) {
      setIsError(true)
      return alert('Not enough money')
    }
  }

  function reset() {
    dispatch (resetStylesFrom())
    dispatch (resetStylesOn())
    dispatch (resetStylesOnCA())
    setFromNumberCard('')
    setOnNumberCard('')
    setName('')
    setSumma(0)
    setAppointment('')
    setIsError(false)
  }

  const pay = () => {
  
  conditions()
  
  dispatch (plusBalance({idOn, summa}))
  dispatch (minusBalance({idFrom, summa}))
  dispatch (newItemHistory({fromNumberCard, onNumberCard, summa, name, appointment, isMy, isError}))
  
  reset()
}



// localStorage.clear()

const context = { 
  setIdFrom,
  setSummaFrom,
  setFromNumberCard, 
  setIdOn,
  setOnNumberCard,
  setName,
  setIsMy,
};

  return (
    <Context.Provider value={ context }>
      <div >
      <h2>Card transfer</h2>
      <div className="container_from">
      <p>Choose the card from which funds will be debited:</p>
      <CardsPay />
      </div>
     <div className="container_on">
     <p>Choose the card to which the money will be transferred:</p>
      <CounterAgentsPay />
     </div>
     
      <form className="container_form">
        <p>Enter the transfer amount</p>
        <label htmlFor="summa">
        Summa : <input type="number" id="summa" name="summa" value={summa} onChange={(e) => setSumma(e.target.value)}/>
        </label>
        <label htmlFor="appointment">
        Appointment : <input type="text" id="appointment" name="appointment" value={appointment} onChange={(e) => setAppointment(e.target.value)}/>
        </label>
        <button type="button" onClick={pay}>Submit</button>
      </form>
    </div>
    </Context.Provider>
    
  )
}

export default Home