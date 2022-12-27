import { Route } from 'react-router-dom';
import './reset.css';
import './common.css';
import Home from './pages/Homepage/Home';
import Listpage from './pages/Listpage/Listpage';
import Coinpage from './pages/Coinpage/Coinpage';

function App() {
  return (
    <div className="app">
      <Route path="/" exact component={Home}/>
      <Route path="/coins" exact component={Listpage}/>
      <Route path="/coins/:id" exact component={Coinpage}/>
    </div>
  );
}

export default App;