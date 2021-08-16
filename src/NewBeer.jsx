import axios from 'axios';
import React, { Component } from 'react'
import {Link} from "react-router-dom";



export class NewBeer extends Component {

    state = { beers : null };

    componentDidMount(){
        const id = this.props.match.params.id;
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers"+ id)
        .then((res)=>{
            console.log("res1:",res.data)
            this.setState({
                beers:res.data
            })
        })
        .catch((e)=>console.log(e))

    }

    componentDidUpdate(prevProps, prevState){
         console.log("this is prevProps,", prevProps.match.params.id);
         console.log("this is prevState,", prevState.match.params.id);

        const id = this.props.match.params.id;

        if(this.props.match.params.id !== prevProps.match.params.id){

        axios
        .get("https://ih-beers-api2.herokuapp.com/beers"+ id)
        .then((res)=>{
            console.log("res2:",res.data)
            this.setState({
                beers:res.data
            })
        })
        .catch((e)=>console.log(e))
        }

    }


    render() {

        if (this.state.beers === null){
            return <div>Get some ice cube ...</div> 
            // I receive this div in my localhost but not my beers details
        }

        return (
            <div>
            <header><Link exact to="/"><span>Home</span></Link> </header>
                <h1>NEW BEERS ! </h1>

                <ul>

                <li>

                </li>
                        <img src={this.image_url} alt={this.name}/>
                        <p>{this.name}</p>
                        <p>{this.tagline}</p>
                        <p>{this.contributed_by}</p>
                        <p>{this.attenuation_level}</p>
                        <p>{this.description}</p>
                        
                </ul>
            </div>

            
        )
    }
}

export default NewBeer
