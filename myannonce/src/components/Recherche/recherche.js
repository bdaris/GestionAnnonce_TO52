import React from 'react'
import Checkbox from './checkbox'
import './recherche.css'

const recherche = props =>(
    <div>
        <div className="control has-icons-left">
            <input className="input is-medium" type="text" placeholder="Recherche"/>
            <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
            </span>
        </div>
        <div>
            <Checkbox />
        </div>
    </div>
    );

export default recherche;