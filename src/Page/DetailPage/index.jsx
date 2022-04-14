import React from 'react';
import './DetailPage.scss'

import {Link} from 'react-router-dom'

function DetailPage(props) {
    return (
        <div className="detail">
           <div className="detail-container">
                <div className="container">
                    <div className="row">
                        {/* direction */}
                        <div className="col-xl-12">
                            <Link to='/' className="detail-direction">
                                <i class="fa-solid fa-arrow-left"></i>
                                <p>Overview</p>
                            </Link>
                        </div>

                        {/* infor */}
                        <div className="col-xl-12">
                            <div className="detail-row">
                                <div className="detail-infor">
                                    <img className="detail-infor-avt" src="/img/token-logo.jpg" alt="" />
                                    <div>
                                        <div className="detail-infor-title">
                                            Everdome
                                        </div>
                                        <div className="detail-infor-code">
                                            <img src="/img/erc20_3x.png" alt="" />
                                            <p>BSC: 0x475bFaa1848591ae0E6aB69600f48d828f61a80E</p>
                                            <i class="fa-solid fa-copy"></i>
                                            <img src="/img/iconn.png" alt="" />
                                            <img src="/img/icon (3).png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="detail-btns">
                                    <div className="btn-second">
                                        REQUEST HACKEN AUDIT
                                    </div>
                                    <div className="btn-second">
                                        <img src="/img/icon (4).png" alt="" />
                                        LOCK DOME
                                    </div>
                                    <div className="btn-second">
                                        <img src="/img/icon (5).png" alt="" />
                                        LOCK LIQUIDITY
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* content */}

                        <div className="col-xl-6 mt-30">
                                <div className="detail-card">
                                    <div className="detail-card-first">
                                        <div className="detail-card-title">
                                            Everdome Lockup Overview
                                        </div>
                                        <div className="detail-card-decs">
                                            View liquidity and DOME lockup information
                                        </div>
                                    </div>
                                    <div className="detail-li detail-overview-li">
                                        <div className="detail-overview-infor">
                                            <img src="/img/icon (5).png" alt="" />
                                            <div>
                                                <div className="detail-overview-infor_name">
                                                    Liquidity Locked
                                                </div>
                                                <div className="detail-overview-infor_decs">
                                                    Pancake LPs
                                                </div>
                                            </div>
                                        </div>

                                        <div className="detail-overview-value">
                                            0% Liquidity
                                        </div>
                                    </div>

                                    <div className="detail-li detail-overview-li">
                                        <div className="detail-overview-infor">
                                            <img src="/img/icon (4).png" alt="" />
                                            <div>
                                                <div className="detail-overview-infor_name">
                                                    DOME Locked
                                                </div>
                                                <div className="detail-overview-infor_decs">
                                                    Binance Smart Chain
                                                </div>
                                            </div>
                                        </div>

                                        <div className="detail-overview-value">
                                            600,000,000.00 DOME (0.600%)
                                        </div>
                                    </div>

                                    <div className="detail-li detail-overview-li">
                                        <div className="detail-overview-infor">
                                            <img src="/img/icon (4).png" alt="" />
                                            <div>
                                                <div className="detail-overview-infor_name">
                                                    Circulating Supply
                                                </div>
                                                <div className="detail-overview-infor_decs">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="detail-overview-value">
                                           99,399,999,999.99 DOME
                                        </div>
                                    </div>

                                    <div className="detail-li detail-overview-li">
                                        <div className="detail-overview-infor">
                                            <img src="/img/icon (7).png" alt="" />
                                            <div>
                                                <div className="detail-overview-infor_name">
                                                    Total Supply
                                                </div>
                                                <div className="detail-overview-infor_decs">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="detail-overview-value">
                                           99,999,999,999.99 DOME
                                        </div>
                                    </div>

                                    <div className="detail-li detail-overview-li">
                                        <div className="detail-overview-infor">
                                            <img src="/img/icon (8).png" alt="" />
                                            <div>
                                                <div className="detail-overview-infor_name">
                                                    CoinGecko Ranking
                                                </div>
                                                <div className="detail-overview-infor_decs">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="detail-overview-value">
                                           197
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default DetailPage;