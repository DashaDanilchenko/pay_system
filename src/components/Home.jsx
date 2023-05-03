import CardsPay from "./listPay/CardsPay"
import CounterAgentsPay from "./listPay/CounterAgentsPay"

const Home = () => {
  return (
    <div>
      <p>from card:
        <CardsPay/>
      </p>
      <p>on card:
      <CardsPay/>
      <CounterAgentsPay/>
      </p>
      <form>
        <label htmlFor="summa">
        Summa : <input type="text" id="summa" name="summa"/>
        </label>
        <label htmlFor="appointment">
        Appointment : <input type="text" id="appointment" name="appointment"/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Home