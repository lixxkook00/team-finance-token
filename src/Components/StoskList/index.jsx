import React from 'react';
import './StoskList.scss'

import Data from '../../data/data.json'
import {Link} from 'react-router-dom'

function StoskList(props) {

    const tokenList = Data.token

    return (
        <div className="stocklist">
            <div className="container">
                <div className="stocklist-container">
                    {/* input */}
                    <div className="stocklist-input">
                        <input type="text" placeholder="Search for a token by name/address/contract"/>
                        <div className="stocklist-input-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    {/* table content */}
                    <div className="stocklist-table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="stocklist-table-cell">
                                        NAME
                                    </th>
                                    <th className="stocklist-table-cell">
                                        BLOCKCHAIN
                                    </th>
                                    <th className="stocklist-table-cell">
                                        LIQUIDITY LOCKED
                                    </th>
                                    <th className="stocklist-table-cell">
                                        COINGECKO RANKING
                                    </th>
                                    <th className="stocklist-table-cell">
                                        TOKENS LOCKED
                                    </th>
                                    <th className="stocklist-table-cell">
                                        VALUE LOCKED
                                    </th>
                                    <th className="stocklist-table-cell">
                                        NEXT UNLOCK
                                    </th>
                                    <th className="stocklist-table-cell">
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* tr content */}
                            
                                {
                                    tokenList.map((token,index) => {

                                        // get color process bar
                                        const processBarColor = token.dayPercent >= 50
                                                                ? 'linear-gradient(to left, rgb(8, 158, 61), rgb(99, 215, 140))'
                                                                : 'linear-gradient(to left, rgb(251, 87, 96), rgb(249, 13, 27))'

                                        return (
                                            <tr key={index}>
                                                {/* NAME */}
                                                <th className="stocklist-table-cell-content">
                                                    <Link to={`/view-coin/${token.name}`}>
                                                        <div className="content-name">
                                                            <img className="img-name" src={`./img/${token.avt}`} alt="" />
                                                            <div className="content-name-text">
                                                                <p>{token.name}</p>
                                                                <p className="full-name">
                                                                    {token.fullName}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    
                                                </th>

                                                {/* BLOCKCHAIN */}
                                                <th className="stocklist-table-cell-content">
                                                    <div className="content-name">
                                                        <img className="img-bc"  src={`./img/${token.lcIcon}`} alt="" />
                                                        <p className="content-text">
                                                            {token.lcName}
                                                        </p>
                                                    </div>
                                                </th>

                                                {/* LIQUIDITY */}
                                                <th className="stocklist-table-cell-content">
                                                    <div className="content-name">
                                                        <img className="img-liquidity" src="./img/lock-icon.png" alt="" />
                                                        <p className="content-text">
                                                            {token.liquidity}%
                                                        </p>
                                                    </div>
                                                </th>

                                                {/* RANKING */}
                                                <th className="stocklist-table-cell-content">
                                                    <div className="content-name">
                                                        <img className="img-ranking" src="./img/lock-icon (1).png" alt="" />
                                                        <p className="content-text">
                                                            {token.ranking}
                                                        </p>
                                                    </div>
                                                </th>

                                                {/* TOKEN */}
                                                <th className="stocklist-table-cell-content token-width">
                                                    <div className="content-name">
                                                        <img className="img-token" src="./img/lock-icon.png" alt="" />
                                                        <p className="content-text">
                                                           {token.tokens} ({token.tokensPercent}%)
                                                        </p>
                                                    </div>
                                                </th>

                                                {/* VALUE */}
                                                <th className="stocklist-table-cell-content">
                                                    <div className="content-name">
                                                        <p className="content-text">
                                                            ${token.value}
                                                        </p>
                                                    </div>
                                                </th>

                                                {/* NEXT */}
                                                <th className="stocklist-table-cell-content">
                                                    <div className="content-next">
                                                        <p className="content-text">
                                                            {token.days}
                                                        </p>
                                                        <div className="process-contain">
                                                            <div className="process-block"></div>
                                                            <div className="process-line" 
                                                                style={{
                                                                    backgroundImage: `${processBarColor}`,
                                                                    width: `${token.dayPercent}%`
                                                                }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>

                                                {/* ---- */}
                                                <th className="stocklist-table-cell-content">
                                                    <div className="content-name">
                                                        <a href="" className="btn-view">
                                                            View
                                                        </a>
                                                    </div>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="view-all-coins">
                            <a href="">
                                VIEW ALL COINS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoskList;