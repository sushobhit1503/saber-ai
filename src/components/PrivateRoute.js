import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [cookies, setCookie] = useCookies()
    return localStorage.getItem("token") ? children : <Navigate to="/login" />
  }

export default PrivateRoute