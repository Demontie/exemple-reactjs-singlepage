import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Custom.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import { Route,Switch} from 'react-router-dom';
import NotFound from './components/NotFound';
class App extends Component {
  render() {
    return (
      <div>     
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/sobre" component={Sobre}></Route>
            <Route path="/servicos" component={Servicos}></Route>
            <Route path='*' component={NotFound} />
          </Switch>
          <Footer/>
          
          
        
                
      </div>
    );
  }
}

export default App;
