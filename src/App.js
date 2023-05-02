
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Cards from './components/Cards';
import ContrAgents from './components/ContrAgents';
import History from './components/History';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='cards' element={<Cards/>}/>
        <Route path='contrAgents' element={<ContrAgents/>}/>
        <Route path='history' element={<History/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
