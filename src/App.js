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

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Routes>
        <Route exact path="/email-gen" element={<EmailGen />} />
        <Route exact path="/blog-article" element={<BlogArticle />} />
        <Route exact path="/twitter-assist" element={<GenTweets />} />
        <Route exact path="/cold-email" element={<ColdEmail />} />
        <Route exact path="/social-ads" element={<SocialMedia />} />
        <Route exact path="/code-gen" element={<CodeGen />} />
        <Route exact path="/manage-account" element={<Profile />} />
        <Route exact path="/payments" element={<Payments />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
