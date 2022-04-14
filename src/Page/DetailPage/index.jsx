import React,{useEffect,useState} from 'react';
import './DetailPage.scss'

import {Link} from 'react-router-dom'

import data from '../../data/data.json'

import CanvasChart from '../../Components/CanvasChart'

function DetailPage(props) {

    // get ID product
    let {_id} = props.match.params

    const [currentCoin,setCurrentCoin] = useState([])
    
    useEffect(()=> {
        const getCoin = data.coin.find(product => product.name === _id)

        setCurrentCoin(getCoin)

        window.scrollTo(0, 0);
    },[])
    return (
        <>
            <div className="detail">
                <div className="detail-container">
                    <div className="container">
                        <div className="row">
                            {/* direction */}
                            <div className="col-xl-12">
                                <Link to='/' className="detail-direction">
                                    <i className="fa-solid fa-arrow-left"></i>
                                    <p>Overview</p>
                                </Link>
                            </div>

                            {/* infor */}
                            <div className="col-xl-12">
                                <div className="detail-row">
                                    <div className="detail-infor">
                                        <img className="detail-infor-avt" src={`/img/${currentCoin.avt}`} alt="" />
                                        <div>
                                            <div className="detail-infor-title">
                                                {currentCoin.fullName}
                                            </div>
                                            <div className="detail-infor-code">
                                                <img src={`/img/erc20_3x.png`} alt="" />
                                                <p>BSC: 0x475bFaa1848591ae0E6aB69600f48d828f61a80E</p>
                                                <i className="fa-solid fa-copy"></i>
                                                <img src="/img/iconn.png" alt="" />
                                                <img src="/img/icon (3).png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detail-btns hidden-m-t">
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
                                            <div>
                                                <div className="detail-card-title">
                                                    Everdome Lockup Overview
                                                </div>
                                                <div className="detail-card-decs">
                                                    View liquidity and DOME lockup information
                                                </div>
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

                            {/* chart */}
                            <div className="col-xl-6 mt-30">
                                    <div className="detail-card">
                                        <div className="detail-card-first">
                                            <div>
                                                <div className="detail-card-title">
                                                    Lockup Value
                                                </div>
                                                <div className="detail-card-decs-chart">
                                                    View the lockup value over time
                                                </div>
                                            </div>

                                            <div>
                                                <div className="detail-card-title-price">
                                                    $26,389,482.00
                                                </div>
                                                <div className="detail-card-decs-price">
                                                    63,267.44 BNB
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail-canvas">
                                            <CanvasChart/>
                                        </div>
                                        <div className="detail-card-chart">
                                            <div className="detail-card-row">
                                                <div className="detail-cart-item centering align-items-center flex-direction-column">
                                                    <div className="detail-card-chart-decs">
                                                        Market Cap
                                                        <img src="/img/italic.png" alt="" />
                                                    </div>
                                                    <div className="detail-card-chart-value">
                                                        $400,981,334.91
                                                    </div>
                                                </div>

                                                <div className="detail-cart-item centering flex-direction-column">
                                                    <div className="detail-card-chart-decs">
                                                        Volume (24h)
                                                        <img src="/img/italic.png" alt="" />
                                                    </div>
                                                    <div className="detail-card-chart-value">
                                                        $14,077,110.04
                                                    </div>
                                                </div>

                                                <div className="detail-cart-item centering flex-direction-column">
                                                    <div className="detail-card-chart-decs">
                                                        Circulating Supply
                                                        <img src="/img/italic.png" alt="" />
                                                    </div>
                                                    <div className="detail-card-chart-value">
                                                        99,399,999,999.99 DOME
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* event */}
            <div className="detail-event-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 ">
                            <div className="detail-card">
                                <div className="detail-card-first">
                                    <div className="detail-card-title">
                                        DOME Lock Events
                                    </div>
                                    <div className="detail-card-decs">
                                    </div>
                                </div>
                                
                                {/* li item */}
                                <div className="detail-event-li mt-30">
                                    <div className="row width-100">
                                        <div className="col-xl-1 centering hidden-m-t">
                                            <div className="detail-event-avt">
                                                <img src={`/img/${currentCoin.avt}`} alt="" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-5">
                                            <div className="detail-event-infor">
                                                <div className="detail-event-infor-title">
                                                    Locked Everdome Tokens- 100,000,000.00 DOME
                                                </div>
                                                <div className="display-flex">
                                                    <div className="detail-event-infor-status locked">
                                                        <img src="/img/locked.png" alt="" />
                                                        <p>LOCKED</p>
                                                    </div>
                                                    <p>Locked 02/07/2022 • Unlocks 10/07/2022</p>
                                                </div>
                                                <div className="detail-event-infor-code">
                                                    Owner: 0x1942f331acc1f030621A8f71670cdeEdD2744730
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="detail-event-process">
                                                <p>UNLOCK COUNTDOWN</p>
                                                <div className="process-contain">
                                                    <div className="process-block"></div>
                                                    <div className="process-line" 
                                                        style={{
                                                            backgroundImage: `linear-gradient(to left, rgb(251, 87, 96), rgb(249, 13, 27))`,
                                                            width: `30%`
                                                        }}>
                                                    </div>
                                                </div>
                                                <p className="detail-event-process-days">
                                                    176D – 6H – 23M – 45S
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-xl-2">
                                            <div className="detail-event-btn">
                                                <p>VIEW TX</p>
                                                <img src="/img/popout-solid_3x.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* li item */}
                                <div className="detail-event-li mt-30">
                                    <div className="row width-100">
                                        <div className="col-xl-1 centering hidden-m-t">
                                            <div className="detail-event-avt">
                                                <img src={`/img/${currentCoin.avt}`} alt="" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-5">
                                            <div className="detail-event-infor">
                                                <div className="detail-event-infor-title">
                                                    Locked Everdome Tokens- 100,000,000.00 DOME
                                                </div>
                                                <div className="display-flex">
                                                    <div className="detail-event-infor-status locked">
                                                        <img src="/img/locked.png" alt="" />
                                                        <p>LOCKED</p>
                                                    </div>
                                                    <p>Locked 02/07/2022 • Unlocks 10/07/2022</p>
                                                </div>
                                                <div className="detail-event-infor-code">
                                                    Owner: 0x1942f331acc1f030621A8f71670cdeEdD2744730
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="detail-event-process">
                                                <p>UNLOCK COUNTDOWN</p>
                                                <div className="process-contain">
                                                    <div className="process-block"></div>
                                                    <div className="process-line" 
                                                        style={{
                                                            backgroundImage: `linear-gradient(to left, rgb(8, 158, 61), rgb(99, 215, 140))`,
                                                            width: `70%`
                                                        }}>
                                                    </div>
                                                </div>
                                                <p className="detail-event-process-days">
                                                    176D – 6H – 23M – 45S
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-xl-2">
                                            <div className="detail-event-btn">
                                                <p>VIEW TX</p>
                                                <img src="/img/popout-solid_3x.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* li item */}
                                <div className="detail-event-li mt-30">
                                    <div className="row width-100">
                                        <div className="col-xl-1 centering hidden-m-t">
                                            <div className="detail-event-avt">
                                                <img src={`/img/${currentCoin.avt}`} alt="" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-5">
                                            <div className="detail-event-infor">
                                                <div className="detail-event-infor-title">
                                                    Locked Everdome Tokens- 100,000,000.00 DOME
                                                </div>
                                                <div className="display-flex">
                                                    <div className="detail-event-infor-status locked">
                                                        <img src="/img/locked.png" alt="" />
                                                        <p>LOCKED</p>
                                                    </div>
                                                    <p>Locked 02/07/2022 • Unlocks 10/07/2022</p>
                                                </div>
                                                <div className="detail-event-infor-code">
                                                    Owner: 0x1942f331acc1f030621A8f71670cdeEdD2744730
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="detail-event-process">
                                                <p>UNLOCK COUNTDOWN</p>
                                                <div className="process-contain">
                                                    <div className="process-block"></div>
                                                    <div className="process-line" 
                                                        style={{
                                                            backgroundImage: `linear-gradient(to left, rgb(8, 158, 61), rgb(99, 215, 140))`,
                                                            width: `70%`
                                                        }}>
                                                    </div>
                                                </div>
                                                <p className="detail-event-process-days">
                                                    176D – 6H – 23M – 45S
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-xl-2">
                                            <div className="detail-event-btn">
                                                <p>VIEW TX</p>
                                                <img src="/img/popout-solid_3x.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailPage;