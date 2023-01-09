import { Routes, Route } from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar';
import ColdEmail from './pages/ColdEmail';
import EmailGen from './pages/EmailGen';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Routes>
        <Route exact path="/email-gen" element={<EmailGen />} />
        <Route exact path="/blog-article" />
        <Route exact path="/twitter-assist" />
        <Route exact path="/cold-email" element={<ColdEmail />} />
        <Route exact path="/social-ads" />
        <Route exact path="/code-gen" />
        <Route exact path="/" />
      </Routes>
    </div>
  );
}

export default App;
