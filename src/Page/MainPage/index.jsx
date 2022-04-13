import React from 'react';

import HeaderWrap from '../../Components/HeaderWrap'
import StoskList from '../../Components/StoskList'
import Introduction from '../../Components/Introduction'

function MainPage(props) {
    return (
        <>
            <HeaderWrap/>
            <StoskList/>
            <Introduction/>
        </>
    );
}

export default MainPage;