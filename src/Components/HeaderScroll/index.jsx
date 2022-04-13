import React from 'react';
import './HeaderScroll.scss'

const liListHeader = [
    {
        id:0,
        img: 'Explore.png',
        text:'Explore',
    },{
        id:1,
        img: 'About.png',
        text:'About',
    },{
        id:2,
        img: 'Lockups.png',
        text:'Lockups',
    },{
        id:3,
        img: 'Mint.png',
        text:'Mint',
    },{
        id:4,
        img: 'Mint.png',
        text:'Vesting',
    },{
        id:0,
        img: 'Mint.png',
        text:'Claim token',
    },
]

function HeaderScroll({isHeaderScroll}) {
    return (
       <div className={`header-scroll ${isHeaderScroll && 'open'} `}>
           <div className="container display-flex justify-content-space-between">
               {/* logo */}
               <div className="header-scroll-logo">
                    <img src="./img/team.png" alt="" />
                </div>
                {/* option list */}
                <div className="header-scroll-ul display-flex">
                    {
                        liListHeader.map((li,index) => {
                                return (
                                    <a key={index} className="header-scroll-li">
                                        <div className="header-scroll-li-icon">
                                            <img src={`./img/${li.img}`} alt="" />
                                        </div>
                                        <div className="header-scroll-li-text">
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

export default HeaderScroll;