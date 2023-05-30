
import { Route, Switch } from "react-router";
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Cards from './components/Cards';
import ContrAgents from './components/ContrAgents';
import History from './components/History';
import Single from './components/Single';

function App() {
  return (
   <Switch>
      <Route path='/pay_system/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/pay_system/cards' element={<Cards/>}/>
        <Route path='/pay_system/contrAgents' element={<ContrAgents/>}/>
        <Route path='/pay_system/history' element={<History/>}/>
        <Route path='/pay_system/:id' element={<Single/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
   </Switch>
    
     
  
   
   
  );
}

export default App;
