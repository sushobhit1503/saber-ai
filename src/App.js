import { Routes, Route } from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar';
import BlogArticle from './pages/BlogArticle';
import CodeGen from './pages/CodeGen';
import ColdEmail from './pages/ColdEmail';
import EmailGen from './pages/EmailGen';
import GenTweets from './pages/GenTweets';
import Profile from './pages/Profile';
import SocialMedia from './pages/SocialMedia';
import Home from './pages/HomePage';
import Payments from './pages/Payments';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Otp from './pages/Otp';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Routes>
        <Route exact path="/email-gen" element={<PrivateRoute><EmailGen /></PrivateRoute>} />
        <Route exact path="/blog-article" element={<PrivateRoute><BlogArticle /></PrivateRoute>} />
        <Route exact path="/twitter-assist" element={<PrivateRoute><GenTweets /></PrivateRoute>} />
        <Route exact path="/cold-email" element={<PrivateRoute><ColdEmail /></PrivateRoute>} />
        <Route exact path="/social-ads" element={<PrivateRoute><SocialMedia /></PrivateRoute>} />
        <Route exact path="/code-gen" element={<PrivateRoute><CodeGen /></PrivateRoute>} />
        <Route exact path="/manage-account" element={<Profile />} />
        <Route exact path="/payments" element={<Payments />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
