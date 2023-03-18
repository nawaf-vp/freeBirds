
import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import SearchMc from "./pages/searchchild/SearchMC";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Donation from './pages/donation/Donation';
import Admin from './pages/admin/Admin';
import Org from './pages/organisation/Org';
import User from './pages/user/User';
import Logout from './pages/logout/Logout';
import Addorg from './pages/admin/Addorg';

import CryptoJS  from 'crypto-js';


function App() {
  const ProtectedRoute = ({children}) => {
    const key = 'gzLxc16cnBhScdScGijOEXdAyv2XkgR5TRqYPK5FH7Q='
    const {user} = useContext(AuthContext);
    const data = CryptoJS.AES.decrypt(user,key);
    const token = JSON.parse(data.toString(CryptoJS.enc.Utf8));
    console.log("token"+token)
    if( user === null || !token.type.isUser){
      return <Navigate to="/login"/>;
    }
    return children
  }

  return (
    <div>
         <BrowserRouter>
             <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login/" element={<Login/>}/>
              <Route path="/signup/" element={<SignUp/>}/>
              <Route path="/searchMc/" index element={
                <ProtectedRoute>
                  <SearchMc/>
                </ProtectedRoute>}/>
              {/* <Route path="/searchMc/" element={<SearchMc/>}/> */}
              <Route path="/admin/" element={<Admin/>}/>
              <Route path="/addorg/" element={<Addorg/>}/>
              <Route path="/donation/" element={<Donation/>}/>

              <Route path="/organisation/" element={<Org/>}/>
              <Route path="/user/" element={<User/>}/>
             </Routes>
         </BrowserRouter> 
          
    </div>
  );
}

export default App;

