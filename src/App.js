import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BlogArticle from './pages/BlogArticle';
import CodeDebug from './pages/CodeDebug';
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
import MenuBar from './components/MenuBar';
import AskMeAnything from './pages/AskMeAnything';
import PaymentSuccessRedirect from './pages/PaymentSuccessRedirect';

function App() {
  const [mode, setMode] = useState ("")
  useEffect (() => {
    setMode (localStorage.getItem("mode")) 
  }, [])
  return (
    <div className={mode}>
      <MenuBar />
      <Routes>
        <Route exact path="/email-gen" element={<PrivateRoute><EmailGen /></PrivateRoute>} />
        <Route exact path="/blog-article" element={<PrivateRoute><BlogArticle /></PrivateRoute>} />
        <Route exact path="/twitter-assist" element={<PrivateRoute><GenTweets /></PrivateRoute>} />
        <Route exact path="/cold-email" element={<PrivateRoute><ColdEmail /></PrivateRoute>} />
        <Route exact path="/social-ads" element={<PrivateRoute><SocialMedia /></PrivateRoute>} />
        <Route exact path="/code-gen" element={<PrivateRoute><CodeGen /></PrivateRoute>} />
        <Route exact path="/code-debug" element={<PrivateRoute><CodeDebug /></PrivateRoute>} />
        <Route exact path="/manage-account" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route exact path="/ask-me-anything" element={<PrivateRoute><AskMeAnything /></PrivateRoute>} />
        <Route exact path="/paymentSuccessRedirect" element={<PrivateRoute><PaymentSuccessRedirect /></PrivateRoute>} />
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
