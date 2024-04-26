import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Result } from "postcss";

const Register = () => {
  const [showPassword, setShowPassword] = useState();
  const {createUser} = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, name, photo, password);
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "oops....",
        text: "Password must be at least six character",
      });
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "oops....",
        text: "Password must have at least one uppercase and one lowercase letter",
      });
      return;
    }
    createUser(email,password)
    .then(result=>{
        Swal.fire({
            icon: "success",
            title: "Yah....",
            text: "Registration in Successfull!",
          });
        console.log(result)
    }).catch(error=>console.error(error))
  };
  return (
    <div className="mt-10 bg-pink-200 p-7 font-raleway">
      <div className="md:w-3/4 lg:w-1/3 mx-auto shadow bg-pink-200 ">
        <form onSubmit={handleSignIn} className="card-body bg-gray-300">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="relative">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="lg:absolute top-12 right-4"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Register</button>
          </div>
        </form>
        <div>
          <h3 className="text-center p-3">
            Already Have an account
            <Link className="font-bold ml-2 text-blue-600" to="/login">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
