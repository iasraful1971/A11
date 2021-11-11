import React from 'react';
import './policy.css';
const Policy = () => {
    return (
        <div className="policy my-5 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 xl">
                    <i class="fas fa-money-check-alt"></i>
                    <h2>14 Days Return</h2>
                    <p>We are able to ship our items to almost
                       anywhere in the world</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 xl">
                    <i class="fal fa-cog"></i>
                    <h2>Security Payment</h2>
                    <p>Usually fall within the 14–day
                       return policy,anywhere in the world</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 xl">
                    <i class="fal fa-dice"></i>
                      <h2>24/7 Support</h2>
                    <p>Securely process all of our card
                         transactions.anywhere in the world</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;