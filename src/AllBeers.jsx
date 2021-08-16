import axios from 'axios';
import React, { Component } from 'react'
import {Link, Route} from "react-router-dom";
import NewBeer from './NewBeer';


export class AllBeers extends Component {

    state = {
        beers : [],
    }

    componentDidMount(){
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((res)=>{
            console.log("this is res:", res.data)
            this.setState({
                beers: res.data,
            })
        })
        .catch((e)=>console.log(e))
    }


    render() {
        return (
            <div>
                <header><Link exact to="/"><span>Home</span></Link> </header>
                <h1>ALL BEERS ! </h1>


                <Route
                    exact path="/beers/:id"
                    component={NewBeer}
                />

                <ul>
                    {this.state.beers.map( (item)=>{
                        return(
                        <li> 
                        <img src={item.image_url} alt={item.name} />
                        <p>{item.name}</p>
                        <p>{item.tagline}</p>
                        <p>{item.contributed_by}</p>
                        <a href={"/beers/:"+item._id}>See more!</a>
                        </li>
                        )
                       
                    })}
                </ul>

            </div>
        )
    }
}

export default AllBeers
