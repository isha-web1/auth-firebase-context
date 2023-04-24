import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
 const {user, logout } = useContext(AuthContext)

 const handleLogOut = () =>{
    logout()
    .then(()=>{})
    .catch(error => console.log(error) )
      
    
 }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-5xl text-warning">Auth-firebase-context</a>
        <Link className="btn btn-ghost normal-case text-4xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-4xl "to="/login">Login</Link>
        <Link className="btn btn-ghost normal-case text-4xl "to="/register">Register</Link>
      </div>
      {
        user ? <div><span>{user.email}</span> <button onClick={handleLogOut}  className="btn btn-sm">Sign out</button> </div> : <Link to="/login"><button  className="btn btn-sm">Sign out</button></Link>
      }
    </div>
  );
};

export default Header;
