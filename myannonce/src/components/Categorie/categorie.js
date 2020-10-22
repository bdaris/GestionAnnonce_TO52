import React from 'react'
import './categorie.css'
import logo from './Assets/logos.jpg'; // Tell webpack this JS file uses this image
import logo1 from './Assets/covoiturage.jpg'
import offrestage from './Assets/offredestage.jpg'
import offreemploie from './Assets/offreemploie.jpg'
import stage from './Assets/stage.jpg'
import './categorie.css'
import { Link } from 'react-router-dom'

const CategrieAnnonce = props =>{

    return (
        <div className="carousel">
            <div className="main-carousel" data-flickity='{ "cellAlign": "left","wrapAround": true, "freeScroll": true }'>
                <Link to="/location">
                    <div className="carousel-cell1"> <a href="/location"><img src={logo} alt="location"/> </a></div>
                </Link>
                <Link to="/covoiturage">
                    <div className="carousel-cell2"> <a href="/covoiturage"><img src={logo1} alt="covoiturage"/> </a> </div>               
                </Link>
                <div className="carousel-cell3"><img src={offrestage} alt="offre de stage"/></div>
                <div className="carousel-cell4"><img src={offreemploie} alt="offre d'emploie"/></div>
                <div className="carousel-cell5"><img src={stage} alt="stage"/></div>
            </div>
        </div>
    );
};

export default CategrieAnnonce;