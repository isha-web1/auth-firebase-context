import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const LogIn = () => {
    const {SignIn} = useContext(AuthContext)

    const handleLogin= event =>{
        event.preventDefault()
       const form = event.target;
       const email = form.email.value
       const password = form.password.value
       console.log(email, password)

       SignIn(email,password)
       .then(result =>{
        const logUser = result.user
        console.log(logUser)
       })
       .catch(error =>{
        console.log(error)
       })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Please Login !!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <Link to='/register'>
          <button className="btn btn-link">New to auth-firebase-context?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
