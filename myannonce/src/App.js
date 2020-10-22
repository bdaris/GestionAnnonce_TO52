import React, { Component } from 'react';
import Menu from './components/Menubar/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LocationCategorie from './components/ListCategorie/locationCategorie'
import Connexion from './components/Connexion/connexion'
import MainContainer from './components/MainContainer/mainContainer'
import CreateAnnonce from './components/CreateAnnonce/createAnnonce'

//CSS
import './App.css';

class App extends Component {

  render(){
    return (
      <div style={{height: '100%'}} className="parent">
        <Router>
          <div>
            <Menu />
          </div>
          <Switch>
            <Route exact path="/" component={MainContainer}/>
            <Route path="/connexion" component={Connexion}/>
            <Route path="/location" component={LocationCategorie} />
            <Route path="/createannonce" component={CreateAnnonce} />
          </Switch>   
        </Router>
          <div className="newannonce">
              
          </div>
      </div>
    );
  }
}
export default App;
