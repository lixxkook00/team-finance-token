import React from 'react';
import './HeaderWrap.scss'

function HeaderWrap(props) {
    return (
       <div className="header-wrap">
           <div className="container">
               <div className="header-wrap-title">
                <img src="/img/logo-header.png" alt="" />
                <h1> | Smart Locks</h1>
            </div>
            
            <div className="header-wrap-decs centering">
                Liquidity Locking & Team Vesting for Token Founders and Community
            </div>

                <div className="header-wrap-list">
                    <div className="header-wrap-item">
                        <div className="item-img">
                            <img src="/img/icon.png" alt="" />
                        </div>
                        <div className="item-infor">
                            <div className="item-infor-title">
                                $ 5,797,428,695.70
                            </div>
                            <div className="item-infor-decs">
                                Total Locked Token Value
                            </div>
                        </div>
                    </div>
                    <div className="header-wrap-item">
                        <div className="item-img">
                            <img src="/img/icon.png" alt="" />
                        </div>
                        <div className="item-infor">
                            <div className="item-infor-title">
                                $ 5,797,428,695.70
                            </div>
                            <div className="item-infor-decs">
                                Total Locked Token Value
                            </div>
                        </div>
                    </div>
                    <div className="header-wrap-item">
                        <div className="item-img">
                            <img src="/img/icon.png" alt="" />
                        </div>
                        <div className="item-infor">
                            <div className="item-infor-title">
                                $ 5,797,428,695.70
                            </div>
                            <div className="item-infor-decs">
                                Total Locked Token Value
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    );
}

export default HeaderWrap;