import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Edition from '../Edition/Edition';
import Testimonial from '../Testimonial/Testimonial/Testimonial';
import Policy from './Policy/Policy';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
           <Policy></Policy>
           <Edition></Edition>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;