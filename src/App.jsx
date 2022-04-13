import logo from './logo.svg';
import './App.scss';

import Header from './Components/Header'
import HeaderWrap from './Components/HeaderWrap'
import StoskList from './Components/StoskList'
import Introduction from './Components/Introduction'
import BannerCreate from './Components/BannerCreate'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
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
