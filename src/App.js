import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Watch from './components/watch'
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/watch/:id" component={Watch}></Route>
    </Router>
    </div>
  );
}

export default App;
