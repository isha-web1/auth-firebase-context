import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-5xl text-warning">Auth-firebase-context</a>
        <Link className="btn btn-ghost normal-case text-4xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-4xl "to="/login">Login</Link>
        <Link className="btn btn-ghost normal-case text-4xl "to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
