import { BrowserRouter as Router, Route } from 'react-router-dom'
import Characters from './components/Characters/Characters'
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (  
    <div>
      <Router>
        <Navigation />
        <Route path="/" exact component={Home}/>
        <Route path="/characters" exact component={Characters}/>
      </Router>
    </div>
  );
}

export default App;
