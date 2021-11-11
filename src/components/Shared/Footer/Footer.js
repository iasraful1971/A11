import { Container } from '@mui/material';
import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
          
            <Container>
                <div className="row footer-style">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <ul>
                            <li><i class="fas fa-phone-square-alt"></i> <span>+123 488 9652</span></li>
                            <li><i class="fas fa-map-marker-alt"></i> <span>25 West 21th Street, Miami FL, USA</span></li>
                            <li><i class="far fa-envelope"></i> <span>info@luchiana.com</span></li>
                            <li><i class="far fa-clock"></i> <span>Mon-Fri: 10:00 - 18:00</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-middle">
                        <h2>LUCHINA</h2>
                        <div className="socials">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-quora"></i>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                   <p> Style too own civil out along. Perfectly offending attempted add arranging  age gentleman. Get who uncommonly our expression ten increasing considered.</p>
               
                    <button className="footer-btn">read more</button>
                    </div>
                </div>
                <div className="copy">
                    
               <div>      <p> © 2020 LUCHIANA Theme. All rights reserved.</p></div>
                  
                    <div className="footer-condition">
                        <ul>
                            <li>PRIVACY POLICY</li>
                            <li>TERMS</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
        </Container>
        </div>
    );
};

export default Footer;