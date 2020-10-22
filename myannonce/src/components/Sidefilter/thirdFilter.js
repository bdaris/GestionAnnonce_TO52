import React, { Component } from 'react'
import { Collapse } from 'reactstrap'
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
            <div className="thirdfilter">
                <p onClick={this.openFilter} className="titlefirstfilter"> Prix </p>
                <div>
                    <Collapse isOpen={this.state.isOpen}>
                        <div className="filterPrix">
                            <input type="text" name="min" className="minPrix" placeholder="min"/>
                            <input type="text" name="max" className="maxPrix" placeholder="max"/>
                        </div>
                    </Collapse>
                </div>    
            </div>
        );
        
    }    
};

export default sidefilter;