import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Home from './components/homepage/home';
import Erroralert from './error';
import Project from './components/projects/project';
import Derti from './components/projects/derti';
import Jack from './components/projects/jack';
import Maplus from './components/projects/maplus';
import James from './components/projects/james';
import Socks from './components/projects/socks';
import About from './components/about/about';
import Shop from './components/shop/shop';
import Journal from './components/journal/journal';
import Van from './components/journal/van';
import Syneria from './components/journal/exclusive';
import Amadelfw from './components/journal/amadel';
import Sunufw from './components/journal/sunu';
import Viewitem from './components/nav/viewitem';
import NavBar from './components/nav/nav';
import Checkout from './components/nav/checkout';

function App({ currentitems }) {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/projects'>
            <Project />
          </Route>
          <Route path='/derti'>
            <Derti />
          </Route>
          <Route path='/CEDRICJACQUEMYN'>
            <Jack />
          </Route>
          <Route path='/amadei'>
            <Maplus />
          </Route>
          <Route path='/james'>
            <James />
          </Route>
          <Route path='/socks'>
            <Socks />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/journal'>
            <Journal />
          </Route>
          <Route path='/janjanvan'>
            <Van />
          </Route>
          <Route path='/syneria'>
            <Syneria />
          </Route>
          <Route path='/amadelfw'>
            <Amadelfw />
          </Route>
          <Route path='/sunufw'>
            <Sunufw />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          {!currentitems ? (
            <Redirect to='/shop' />
          ) : (
            <Route path='/item'>
              <Viewitem />
            </Route>
          )}
          <Route path='*'>
            <Erroralert />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
const maptoload = (state) => {
  return {
    currentitems: state.shop.currentitems,
  };
};

export default connect(maptoload)(App);
