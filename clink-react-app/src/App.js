import './App.css';
<<<<<<< HEAD
import MainCalendar from './component/MainCalendar';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindId from './components/FindId';
import FindPwd from './components/FindPwd';
import Join from './components/Join';
import Login from './components/Login';
import Community1 from './components/Community1';
import NotFound from './components/NotFound';
>>>>>>> 26eb86661bb8c7239ce78021137527736cf937c0

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <MainCalendar />
=======
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Community1 />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/findId" element={<FindId />}></Route>
          <Route path="/findPwd" element={<FindPwd />}></Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 26eb86661bb8c7239ce78021137527736cf937c0
    </div>
  );
}

export default App;
