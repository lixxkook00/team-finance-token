import {useState,useEffect} from 'react'
import './App.scss';

import Header from './Components/Header'
import HeaderScroll from './Components/HeaderScroll'
import HeaderWrap from './Components/HeaderWrap'
import StoskList from './Components/StoskList'
import Introduction from './Components/Introduction'
import BannerCreate from './Components/BannerCreate'
import Footer from './Components/Footer'

function App() {
  
  // handle open header scroll
  const [isHeaderScroll,setIsHeaderScroll] = useState(false);
  const [windowY,setWindowY] = useState(0);

  document.addEventListener('scroll', function(e) {
    setWindowY(window.scrollY)
    
  });

  useEffect(()=> {
    windowY > 75 ? setIsHeaderScroll(true) : setIsHeaderScroll(false)
  },[windowY])

  
  return (
    <div className="App">
      <Header/>
      <HeaderScroll isHeaderScroll={isHeaderScroll}/>
      <HeaderWrap/>
      <StoskList/>
      <Introduction/>
      <BannerCreate/>
      <Footer/>
      
      <div className="overlay"></div>
    </div>
  );
}

export default App;
