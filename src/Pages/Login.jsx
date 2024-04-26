import { useContext } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { createUser,setUser,googleLogin } = useContext(AuthContext);
  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email,password)
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Yah....",
          text: "Loging in Successfull!",
        });
        console.log(result);
      })
      .then((error) => console.error("Error during login:", error));
  };
  const handleGoogleLogin=()=>{
    googleLogin()
    .then(result=>{
        Swal.fire({
            icon: "success",
            title: "Yah....",
            text: "Loging in Successfull!",
          });
          setUser(result)
    })
    .catch(error=>console.error(error))
  }
  return (
    <div className="hero mt-10 bg-gray-200 p-10 font-nunito-sans">
      <div className="hero-content flex-col ">
        <h1 className="text-5xl font-bold">Please Login now!</h1>

        <div className="card shrink-0 w-full   bg-pink-200">
          <form onSubmit={handleLoginUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="p-4 text-center">
            Don't have any Account Please{" "}
            <Link className="font-bold text-blue-700" to="/register">
              Register
            </Link>
          </p>

          <div className="flex gap-4 items-center p-4">
            <hr className="border border-gray-700 w-full border-t-4" />
            <p>or</p>
            <hr className="border border-gray-700 w-full border-t-4" />
          </div>
          <div className="flex justify-center gap-4 text-4xl p-3">
            <FcGoogle onClick={handleGoogleLogin}></FcGoogle>
            <FaGithubSquare></FaGithubSquare>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
