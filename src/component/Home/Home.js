import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import Services from '../Services/Services';

import './Home.css';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Category></Category>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;