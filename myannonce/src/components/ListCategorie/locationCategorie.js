import React, { useEffect,useState } from 'react'
import {Card, CardBody, CardHeader, CardText, CardImg, CardTitle, CardSubtitle} from 'reactstrap'
import Recherche from '../Recherche/recherche'
import Checkbox from '../Recherche/checkbox'
import './locationCategorie.css'


const LocationCategorie = () =>  {

    const [location, setLocation] = useState([]); 

    const getAnnonce = async () => {
        try{
            const response = await fetch("http://localhost:3001/annonce");
            const annonceData = await response.json();
            setLocation(annonceData); //set state to assign data fetch from backend

        }catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAnnonce()
    },[])
    console.log(location)
        return(
            <div>
                <div className="rechercheLocation">
                    <Recherche />
                </div>
                <div className="listAnnonce">
                    {location.map(annonces =>{
                        return(
                            <div>
                                <Card>
                                    <CardBody>
                                        <CardTitle>{annonces.titre_annonce}</CardTitle>
                                        <CardSubtitle>{annonces.montant_annonce}</CardSubtitle>
                                        <CardText>{annonces.descript_annonce}</CardText>
                                    </CardBody>
                                </Card> <br/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}

export default LocationCategorie;