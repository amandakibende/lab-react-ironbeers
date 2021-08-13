import React, { Component } from 'react'
import {Link} from "react-router-dom";


export class NewBeer extends Component {
    render() {
        return (
            <div>
            <header><Link exact to="/"><span>Home</span></Link> </header>
                <h1>NEW BEERS ! </h1>
            </div>
        )
    }
}

export default NewBeer
