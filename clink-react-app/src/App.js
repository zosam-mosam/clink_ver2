import logo from './logo.svg';
import './App.css';
import Community from './pages/Community.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './pages/Post';
import WritingPost from './pages/WritingPost';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
				<Routes>
					<Route path="/community/post" element={<Community />}></Route>
					<Route path="/community/post/*" element={<Post />}></Route>
          <Route path="/community/writing" element={<WritingPost />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
