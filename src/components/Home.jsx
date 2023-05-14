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
  const [balance, setBalance] = useState('')

  const dispatch = useDispatch()

  const pay = () => {
  if (summa <= 0 ) {
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
  dispatch (newItemHistory({fromNumberCard, onNumberCard, summa, name, appointment, balance}))
  dispatch (resetStylesFrom())
  dispatch (resetStylesOn())
  dispatch (resetStylesOnCA())
  setFromNumberCard('')
  setOnNumberCard('')
  setName('')
  setSumma(0)
  setAppointment('')
}



// localStorage.clear()

const context = { 
  setIdFrom,
  setSummaFrom,
  setFromNumberCard, 
  // setAppointment,
  setIdOn,
  setOnNumberCard,
  setName,
  setBalance,
};

  return (
    <Context.Provider value={ context }>
      <div className="container">
      <h2>Card transfer</h2>
      <div className="container_from">
      <p>Choose the card from which funds will be debited:</p>
      <CardsPay 
      // setIdFrom={setIdFrom} 
      // setSummaFrom={setSummaFrom}
      // setFromNumberCard={setFromNumberCard}
      // setAppointment={setAppointment}
      />
      </div>
     <div className="container_on">
     <p>Choose the card to which the money will be transferred:</p>
      <CounterAgentsPay 
      // setIdOn={setIdOn}
      // setOnNumberCard={setOnNumberCard}
      // setName={setName}
      // setBalance={setBalance}
      />
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