import React, {Component} from "react"

export default class House extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    

    render(){
        return(
            <div>

                <h4>Proporty Name:{this.props.name}</h4>
                <h4>Address: {this.props.address}</h4>
                <h4>City: {this.props.city}</h4>
                <h4>State: {this.props.state}</h4>
                <h4>Zip: {this.props.zip}</h4>
                <button>Delete</button>
                         
            </div>
        )
    }
}