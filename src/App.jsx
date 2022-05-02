
import {useState,useEffect} from 'react'
import './App.scss';

import Header from './Components/Header'
import HeaderScroll from './Components/HeaderScroll'
import BannerCreate from './Components/BannerCreate'
import Footer from './Components/Footer'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

// page

import MainPage from './Page/MainPage'
import DetailPage from './Page/DetailPage'

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

  // scroll to top when change router
  useEffect(()=> {
      window.scrollTo(0, 0);
  },[])

  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])

  
  return (
    <Router>
      <div className="App">
        <Header/>
        <HeaderScroll isHeaderScroll={isHeaderScroll}/>
        
        {/* page */}
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
        </Switch>

        <Switch>
            <Route exact path="/view-coin/:_id" component={DetailPage} />
        </Switch>

        <BannerCreate/>
        <Footer/>
        
        <div className="overlay"></div>
      </div>
    </Router>
  );
}

export default App;
