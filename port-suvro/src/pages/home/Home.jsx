import React from 'react';
import Profile from "../../assets/home-suvro.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className='home__img' />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Suvrodeep Debnath.</span><br />MERN developer
          </h1>
          <p className="home__description">
            I'm a Kolkata based MERN Stack developer & AI - ML cum Web3 enthusiast focussed on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
          </p>
          <Link to="/about" className='button'>
            About me <span className='button__icon'><FaArrowRight /></span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;