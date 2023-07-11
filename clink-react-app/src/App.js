import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindId from './components/FindId';
import FindPwd from './components/FindPwd';
import Join from './components/Join';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import MyPage from './components/MyPage';

function App() {
  return (
    <div className="App">
      {/* <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/findId" element={<FindId />}></Route>
          <Route path="/findPwd" element={<FindPwd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
