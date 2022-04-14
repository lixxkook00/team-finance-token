import React from 'react';
import './HeaderScroll.scss'

import {Link} from 'react-router-dom'


import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Drawer from '@mui/material/Drawer';

const liListHeader = [
    {
        id:0,
        img: 'Explore (1).png',
        imgGray: 'Explore.png',
        text:'Explore',
    },{
        id:1,
        img: 'About (1).png',
        imgGray: 'About.png',
        text:'About',
    },{
        id:2,
        img: 'Lockups (1).png',
        imgGray: 'Lockups.png',
        text:'Lockups',
    },{
        id:3,
        img: 'Mint (1).png',
        imgGray: 'Mint.png',
        text:'Mint',
    },{
        id:4,
        img: 'Mint (1).png',
        imgGray: 'Mint.png',
        text:'Vesting',
    },{
        id:0,
        img: 'Mint (1).png',
        imgGray: 'Mint.png',
        text:'Claim token',
    },
]

function HeaderScroll({isHeaderScroll}) {

     const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
    };
        
    const modalCart = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className="header-nav">
                    <div className="header-nav-logo">
                        <img src="/img/team.png" alt="" />
                        <button className="btn-second" ><i className="fa-solid fa-xmark"></i></button>
                    </div>

                    {
                        liListHeader.map((item,index) => {
                            return (
                                <div className="header-nav-item">
                                    <img src={`/img/${item.imgGray}`} alt="" />
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }

                    
                </div>
            </List>
            <Divider />
        </Box>
    );

    return (
       <div className={`header-scroll ${isHeaderScroll && 'open'} `}>
           <div className="container display-flex justify-content-space-between">
               {/* logo */}
               <Link to='/' className="header-scroll-logo">
                    <img src="/img/team.png" alt="" />
                </Link>
                {/* option list */}
                <div className="header-scroll-ul display-flex hidden-m-t">
                    {
                        liListHeader.map((li,index) => {
                                return (
                                    <a key={index} className="header-scroll-li">
                                        <div className="header-scroll-li-icon">
                                            <img src={`/img/${li.img}`} alt="" />
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
                <button className="btn-primary hidden-m-t">
                    Connect Wallet
                </button>

                <button onClick={toggleDrawer('top', true)}  className="btn-second hidden-pc">
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Modal Cart */}
                <Drawer
                    anchor={'top'}
                    open={state['top']}
                    onClose={toggleDrawer('top', false)}
                >
                    {modalCart('top')}
                </Drawer>
           </div>
       </div>
    );
}

export default HeaderScroll;