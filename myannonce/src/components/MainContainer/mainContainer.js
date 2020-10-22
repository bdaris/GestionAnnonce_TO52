import React, { Component } from 'react'
import Fistfilter from '../Sidefilter/firstFiltre'
import Secondfilter from '../Sidefilter/secondFilter'
import Thirdfilter from '../Sidefilter//thirdFilter'
import Recherche from '../Recherche/recherche'
import Checkbox from '../Recherche/checkbox'
import Categorie from '../Categorie/categorie'
import CreateA from '../CreateAnnonce/createAnnonce'

class MainContainer extends Component{
    
    render(){
        return(
            <div>
                <div className="filtre">
                    <Fistfilter/>
                    <Secondfilter/>
                    <Thirdfilter/>
                </div>
                <div className="main">
                  <div className="rechercheCheck">
                    <div className="recherche">
                      <Recherche />
                    </div>
                     <Categorie />
                  </div>
                </div>
            </div>
        )
    }
}

export default MainContainer;