import './App.scss';
import Header from './components/Header/Header'
import Home from'./Views/Home/index'
import News from './Views/Listing/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './Views/NewsDetails/index'
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
      <Router>
        <div style={{backgroundColor:'#efefef'}}>
      <Header/> 
      <Switch>
          <Route path="/News">
            <News/>
          </Route>
          <Route path="/NewsDetails">
            <Details/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
       <Footer/>    
       </div>
       </Router>
    
  );
}

 