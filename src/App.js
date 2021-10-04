
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Course from './Component/Course/Course';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import NotFound from './Component/NotFound/NotFound';
import Pricing from './Component/Pricing/Pricing';

function App() {
  return (
    <div >
      <Router>
        <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route  path="/home">
              <Home></Home>
            </Route>

            <Route  path="/course">
              <Course></Course>
            </Route>

            <Route  path="/pricing">
              <Pricing></Pricing>
          </Route>
          
            <Route  path="/about">
              <About></About>
            </Route>
            

            <Route path="*">
              <NotFound></NotFound>
            </Route>

            
          </Switch>
          <Footer></Footer>
        
      </Router>
      
    </div>
  );
}

export default App;
