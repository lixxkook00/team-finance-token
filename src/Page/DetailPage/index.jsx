import React from 'react';
import './DetailPage.scss'

import {Link} from 'react-router-dom'

function DetailPage(props) {
    return (
        <div className="detail">
           <div className="detail-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <Link to='/' className="detail-direction">
                                <i class="fa-solid fa-arrow-left"></i>
                                <p>Overview</p>
                            </Link>
                        </div>
                        <div className="col-xl-12">
                            <div className="detail-row">
                                <div className="detail-infor">
                                    <img src="/img/token-logo.jpg" alt="" />
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
                                        LOCK DOME
                                    </div>
                                    <div className="btn-second">
                                        LOCK LIQUIDITY
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