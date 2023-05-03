import { useSelector } from "react-redux"

const CounterAgentsPay = () => {

const counterAgent = useSelector(state => state.counterAgent.counterAgent)
console.log(counterAgent)

  return (
    <div>CounterAgentsPay</div>
  )
}

export default CounterAgentsPay