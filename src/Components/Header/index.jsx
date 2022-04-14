import React from 'react';
import './Header.scss'

import {Link} from 'react-router-dom'

const liListHeader = [
    {
        id:0,
        img: 'Explore (1).png',
        text:'Explore',
    },{
        id:1,
        img: 'About (1).png',
        text:'About',
    },{
        id:2,
        img: 'Lockups (1).png',
        text:'Lockups',
    },{
        id:3,
        img: 'Mint (1).png',
        text:'Mint',
    },{
        id:4,
        img: 'Mint (1).png',
        text:'Vesting',
    },{
        id:0,
        img: 'Mint (1).png',
        text:'Claim token',
    },
]

function Header(props) {
    return (
       <div className="header">
           <div className="container display-flex justify-content-space-between">
               {/* logo */}
               <Link to='/'  className="header-logo">
                    <img src="/img/team-white.png" alt="" />
                </Link>
                {/* option list */}
                <div className="header-ul display-flex hidden-m-t">
                    {
                        liListHeader.map((li,index) => {
                                return (
                                    <a key={index} className="header-li">
                                        <div className="header-li-icon">
                                            <img src={`/img/${li.img}`} alt="" />
                                        </div>
                                        <div className="header-li-text">
                                            {li.text}
                                        </div>
                                    </a>
                                )
                        })
                    }
                </div>
                {/* button */}
                <button className="btn-primary hidden-m-t">
                    Connect Wallet
                </button>
                <button className="btn-primary hidden-pc">
                    <i className="fa-solid fa-bars"></i>
                </button>
           </div>
       </div>
    );
}

export default Header;