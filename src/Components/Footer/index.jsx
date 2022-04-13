import React from 'react';
import './Footer.scss'

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="footer-icon">
                            <img src="./img/logo-footer.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="footer-row">
                            <div className="footer-row-title">
                                Platform
                            </div>
                            <a className="footer-row-content">
                                Explore
                            </a>
                             <a className="footer-row-content">
                                All Coins
                            </a>
                             <a className="footer-row-content">
                                About
                            </a>
                             <a className="footer-row-content">
                                TrustSwap
                            </a>
                        </div>
                    </div>

                    <div className="col-xl-2">
                        <div className="footer-row">
                            <div className="footer-row-title">
                                Lockups
                            </div>
                            <a className="footer-row-content">
                                Create Lock
                            </a>
                             <a className="footer-row-content">
                                My Lockups
                            </a>
                             <a className="footer-row-content">
                                Help Locking
                            </a>
                             <a className="footer-row-content">
                                FAQ
                            </a>
                        </div>
                    </div>

                    <div className="col-xl-2">
                        <div className="footer-row">
                            <div className="footer-row-title">
                                Company
                            </div>
                            <a className="footer-row-content">
                                Term and Conditions
                            </a>
                             <a className="footer-row-content">
                                Privacy Policy
                            </a>
                             <a className="footer-row-content">
                                Disclaimers
                            </a>
                             <a className="footer-row-content">
                               GitBook
                            </a>
                        </div>
                    </div>

                    <div className="col-xl-2">
                        <div className="footer-row">
                            <div className="footer-row-title">
                                Connect
                            </div>
                            <a className="footer-row-content">
                                Telegram
                            </a>
                             <a className="footer-row-content">
                                 
                                Twitter
                            </a>
                             <a className="footer-row-content">
                                Youtube
                            </a>
                             <a className="footer-row-content">
                               Discord
                            </a>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="footer-line"></div>
                    </div>
                    <div className="col-xl-12">
                        <div className="footer-infor">
                            <p>
                                © 
                                2022
                                TrustSwap Inc. All Rights Reserved.
                            </p>
                            <div className="footer-infor-status">
                                <div className="circle"></div>
                                Ethereum Mainnet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;