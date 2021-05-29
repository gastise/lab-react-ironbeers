import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


class Beers extends Component {

    state = {
        beers : [],
    }


componentDidMount() {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((res) => {
        // console.log(res.data);

        this.setState({
            beers : res.data,
        })
        });
    }

    render () {
        console.log(this.state.beers);
        
        return (this.state.beers.map((beer) => {
            
            return <div>
            <h1>Beers</h1>;
            <img src={beer.image_url} alt={beer.name} />
            <Link exact to ={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
            <p>{beer.tagline}</p>
            <p>by {beer.contributed_by}</p>
            </div>
        })
           
            )
    }
}

export default Beers;

