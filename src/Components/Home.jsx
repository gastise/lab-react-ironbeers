import React from "react";
import { Link } from "react-router-dom";
import imgBeers from "./../assets/beers.png";
import imgRandomBeers from "./../assets/random-beer.png";
import imgNewBeer from "./../assets/new-beer.png";

const Home = () => {
  return (
    <div>
      <Link exact to="/beers">
      <img src={imgBeers} alt="All Beers" />
        All Beers
      </Link>
      <Link exact to="/random-beer">
      <img src={imgRandomBeers} alt="Random Beer" />
        Random Beer
      </Link>
      <Link exact to="/new-beer">
      <img src={imgNewBeer} alt="New Beer" />
        New Beer
      </Link>
    </div>
  );
};

export default Home;