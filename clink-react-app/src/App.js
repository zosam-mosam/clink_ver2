import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Community from './pages/Community.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './pages/Post';
import WritingPost from './pages/WritingPost';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import NotFound from './NotFound';
import TestView from './main/MainFrame';
import Community from './components/communityTempl';
import Footer from './components/Footer';
import Login from './components/Login';
import Join from './components/Join';
import FindId from './components/FindId';
import FindPwd from './components/FindPwd';

import Challenge from './pages/Challenge';
import MyPage from './components/MyPage';
const setLi = () => {
  const arr = [];
  for (let i = 1; i <= 5; i++) {
    arr.push({
      id: i,
      title: '배고파' + i ** 2,
    });
  }
  return arr;
};
function App() {
  const [list, setList] = useState(setLi);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exac path="/" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/findId" element={<FindId />}></Route>
          <Route path="/findPwd" element={<FindPwd />}></Route>
          <Route element={<Footer />}>
            <Route path="/main" element={<TestView />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/community" element={<Community list={list} />} />
            <Route path="/community/post" element={<Community />}></Route>
            <Route path="/community/post/*" element={<Post />}></Route>
            <Route path="/community/writing" element={<WritingPost />}></Route>
            <Route path="/mypage" element={<MyPage />} />
          </Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
