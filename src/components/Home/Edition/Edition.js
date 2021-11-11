import React from 'react';
import img from '../../../images/img3-5.jpg.webp';
import './Edition.css';
const Edition = () => {
    return (
        <div className="edition py-5">
            <div className="container bg">
                <div className="row style">
                    <div className="col-md-6 col-sm-12 col-12">
                        <h6>SPRING EDITION</h6>
                        <h2>Retro inspirations <br />
                        & echoes</h2>
                        <button className="edition-btn">see collections</button>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edition;