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
            <Route exact path="/https://bdaris.github.io/GestionAnnonce_TO52" component={MainContainer}/>
            <Route path="/GestionAnnonce_TO52/connexion" component={Connexion}/>
            <Route path="/GestionAnnonce_TO52/location" component={LocationCategorie} />
            <Route path="/GestionAnnonce_TO52/createannonce" component={CreateAnnonce} />
          </Switch>   
        </Router>
          <div className="newannonce">
              
          </div>
      </div>
    );
  }
}
export default App;
