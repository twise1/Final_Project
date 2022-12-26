import { Route } from 'react-router-dom';
import './reset.css';
import Homepage from './pages/Homepage/Homepage';
import Listpage from './pages/Listpage/Listpage';
import Coins from './pages/Coins/Coins';

function App() {
  return (
    <div className="app">
      <Route path="/" exact component={Homepage}/>
      <Route path="/coins" exact component={Listpage}/>
      <Route path="/coins/:id" exact component={Coins}/>
    </div>
  );
}

export default App;