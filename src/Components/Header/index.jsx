import React from 'react';
import './Header.scss'

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
               <div className="header-logo">
                    <img src="./img/team-white.png" alt="" />
                </div>
                {/* option list */}
                <div className="header-ul display-flex">
                    {
                        liListHeader.map((li,index) => {
                                return (
                                    <a key={index} className="header-li">
                                        <div className="header-li-icon">
                                            <img src={`./img/${li.img}`} alt="" />
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
                <button className="btn-primary">
                    Connect Wallet
                </button>
           </div>
       </div>
    );
}

export default Header;