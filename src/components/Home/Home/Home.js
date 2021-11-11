import React from 'react';
import HomeProduct from '../../Product/HomeProduct/HomeProduct';
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
             <HomeProduct></HomeProduct>
             <Edition></Edition>
             <Testimonial></Testimonial>
             <Footer></Footer>
        </div>
    );
};

export default Home;