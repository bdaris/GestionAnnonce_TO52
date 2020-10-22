import React, { Component } from 'react'
import {  Collapse } from 'reactstrap'
import './sidefiltre.css'

class sidefilter extends Component {  
    constructor(props){
        super(props);
        this.state = {isOpen:false};
        this.openFilter = this.openFilter.bind(this);
    }
        
    openFilter = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
          }))
    }
    render(){
        return(
            <div className="secondfilter">
                <p onClick={this.openFilter} className="titlefirstfilter"> Superficie en m² </p>
                <div>
                <Collapse isOpen={this.state.isOpen}>
                <div className="filterSuperficie">
                    <input type="text" name="min" className="minSuperficie" placeholder="min"/>
                    <input type="text" name="max" className="maxSuperficie" placeholder="max"/>
                </div>
                </Collapse>
                </div>    
            </div>
        );
        
    }    
};

export default sidefilter;