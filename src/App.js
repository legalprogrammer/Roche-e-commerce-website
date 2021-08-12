import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/homepage/home';
import Erroralert from './error';
import Project from './components/projects/project';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/projects'>
            <Project/>
          </Route>
          <Route path='*'>
            <Erroralert />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
