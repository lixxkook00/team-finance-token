import React from 'react';
import './BannerCreate.scss'

function BannerCreate(props) {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    {/* content */}
                    <div className="col-xl-6">
                        <div className="banner-content">
                            <div className="banner-content-title">
                                Create a Custom Coin Lockup Now
                            </div>
                            <div className="banner-content-decs">
                                Lock your liquidity or developer tokens in a few simple steps with TrustSwap. Our process is easy, fast and secure.
                            </div>
                            <div className="banner-content-btns">
                                <a className="btn-second">
                                    Create Your Lock
                                </a>
                                <a className="btn-primary">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* img */}
                    <div className="col-xl-6">
                        <div className="banner-img">
                            <img src="/img/custom-lockup.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerCreate;