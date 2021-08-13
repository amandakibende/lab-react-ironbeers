import React from 'react'
import {Link} from "react-router-dom";




function Home () {
   
        return (
            <div>

            <h1>Home ! </h1>

              
              <ul>
                  <li><Link exact to="/random-beers"><h2>Random Beers</h2></Link></li>
                  <li><Link exact  to="/all-beers"><h2>All Beers</h2></Link></li>
                  <li><Link exact to="/new-beers"><h2>New Beers </h2> </Link></li>
              </ul>

               
                
                
          

           
                
            </div>
        )
  
}

export default Home
