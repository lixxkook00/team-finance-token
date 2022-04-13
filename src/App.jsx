import logo from './logo.svg';
import './App.scss';

import Header from './Components/Header'
import HeaderWrap from './Components/HeaderWrap'
import StoskList from './Components/StoskList'

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderWrap/>
      <StoskList />
      
      <div className="overlay"></div>
    </div>
  );
}

export default App;
