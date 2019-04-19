import React, {Component} from "react"
import House from "./House"
import {Link} from "react-router-dom"
import axios from "axios";

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount(){
       axios
       .get("/api/houses")
       .then(result => {
           console.log(result.data)
           this.setState({
               houses: result.data
           })
       }) 
    }
    

    render(){
        const houseListings = this.state.houses.map((element, index) => {
            return <House id = {element.id}
                          name = {element.name}
                          address= {element.address}
                          city ={element.city}
                          state = {element.state}
                          zip ={element.zip}
                          />
        }   
        )

        return(
            <div>

                <div>Dashboard</div>
                <Link to =  "/wizard"><button>Add New Proporty</button></Link>
                <h1>HomeListings</h1>
                {houseListings}


            </div>
        )
    }
}