import React from 'react';
import p from '../../images/p.jpeg';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <>
            <Header></Header>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h2>Little About us</h2>
                                <p>we are a server of  product of the Art Deco era, and like the formal attire, named after Tuxedo Park, New York, Tuxedo sofas are smart and elegant.
                                        <br />
                                 These sofas are defined by high arms that sit level with the sofa back, and a clean-lined and geometric style. The back and arms also tend to sit higher than most other sofa styles. The Tuxedo style is perfect for a more formal style of room. <br />
                                 The sofas are defined by high arms that sit level with the sofa back, and a clean-lined and geometric style. The back and arms also tend to sit higher than most other sofa styles. The Tuxedo style is perfect for a more formal style of room.</p>
                                 <p>The sofas are defined by high arms that sit level with the sofa back, and a clean-lined and geometric style. The back and arms also tend to sit higher than most The sofas are defined by high arms that sit level with the sofa back, and a clean-lined and geometric style. The back and arms also tend to sit higher than most</p>
                                 we are a server of  product of the Art Deco era, and like the formal attire, named after Tuxedo Park, New York, Tuxedo sofas are smart and elegant.
                                 <p>we are a server of  product of the Art Deco era, and like the formal attire, named after Tuxedo Park, New York, Tuxedo sofas are smart and elegant.</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <img className="img-fluid" src={p} alt="" />
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </>
    );
};

export default About;