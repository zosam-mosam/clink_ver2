import './App.css';
import { Route, Routes} from 'react-router-dom';
import FindId from './components/FindId';
import FindPwd from './components/FindPwd';
import Footer from './components/Footer';
import Join from './components/Join';
import Login from './components/Login';
import Main from './components/Main';
import Community from './components/Community';
import Challenge from './components/Challenge';
import MyInfo from './components/MyInfo';

function App() {
  return (
    <div className="App">
      <Footer />
      {/* <Login /> */}
      {/* <Join /> */}
      {/* <FindId/> */}
      {/* <FindPwd /> */}
    </div>
  );
}

export default App;
