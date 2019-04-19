import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

export default class Wizard extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: 0,
        }
        this.handleName = this.handleName.bind(this)
    }
    
    handleName (e) {
        this.setState({
            name: e.target.value
        })
    }
    
    postItem = () => {
        axios
        .post("/api/houses", {name: this.state.name, 
                              address: this.state.address, 
                              city: this.state.city, 
                              state:this.state.state, 
                              zipcode: this.state.zipcode}
        )
        
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    

    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    

    handleState = (e) => {
        this.setState({
            state: e.target.value
        })
    }
    

    handleZip = (e) => {
        this.setState({
            zip: e.target.value
        })
    }
    
    render(){
        return(
            <div>
                <h1>Add New Listing</h1>
                <Link to = "/"><button>Cancel</button></Link>
                <br />

                <label>Proporty Name</label>
                <input onChange = { (e) => this.handleName(e)}></input>
                <br />

                <label>Address</label>
                <input onChange = { (e) => this.handleAddress(e)}></input>
                <br />

                <label>City</label>
                <input onChange = { (e) => this.handleCity(e)}></input>
                <br />

                <label>State</label>
                <input onChange = { (e) => this.handleState(e)}></input>
                <br />

                <label>Zip</label>
                <input onChange = { (e) => this.handleZip(e)}></input>

                <Link to = "/">
                    <button onClick = {this.postItem}>Complete</button>
                </Link>

            </div>

        )
    }
}