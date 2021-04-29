import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import HeroSection from '../HomeComponents/HeroSection/HeroSection'
import AboutUs from '../HomeComponents/AboutUs/AboutUs';
import Mission from '../HomeComponents/Mission/Mission';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <AboutUs></AboutUs>
            <Mission></Mission>
            <Services></Services>
            <Testimonials></Testimonials>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;