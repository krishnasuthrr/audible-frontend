import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen min-h-screen pt-16 flex items-center justify-center">
      <div className="w-[80%] md:w-[60%] lg:w-[50%] rounded-2xl h-100 bg-[#1a1a1a] flex flex-col items-center justify-center">
        <input
          type="text"
          required
          placeholder="Enter Username or Email"
          name="username"
          className="bg-white text-center text-black px-5 py-2 my-3 rounded-xl w-[80%] md:w-[50%]"
        />
        <input
          type="text"
          required
          placeholder="Enter Password"
          name="password"
          className="bg-white text-center text-black px-5 py-2 rounded-xl w-[80%] md:w-[50%]"
        />{" "}
        <br />
        <a href="#" className="text-white underline cursor-pointer">
          Forgot Password?
        </a>
        <button className="text-black bg-white px-5 py-2 my-5 rounded-2xl w-30 font-worksans">
          Login
        </button>
        <Link to="/register" className="text-white underline cursor-pointer">
          New User? Register Now.
        </Link>
      </div>
    </div>
  );
}

export default Login