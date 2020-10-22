import React, { Component } from 'react'
import './Creercompte.css'

class Creercompte extends Component{
    render(){
        return(
            <div>
                <form className="form"> 
                    <div className="row box">
                        <div className="col-sm-5">
                        <label for="inputNom"><strong>Nom d'utilisateur</strong></label>
                            <input type="text" className="form-control" placeholder="exple: Fatim"/>
                        </div>
                        </div>
                        <div className="row box" id="email">
                            <div classNameName=" col-md-8">
                            <label for="inputEma"><strong>E-mail</strong></label>
                             <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                        </div>
                        <div className="row box" id="mdp">
                            <div classNameName=" col-md-6">
                            <label for="inputPassword4"><strong>Mot de passe</strong></label>
                            <input type="password" class="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                           You must agree before submitting.
                        </div>
                        </div>
                        <div className="button">
                        <button type="submit" className="btn btn-primary">Creer mon compte</button>
                        </div>

                </form>
            </div>
        );
    }
}
export default Creercompte