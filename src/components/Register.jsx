import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen min-h-screen pt-16 flex items-center justify-center">
      <div className="w-[80%] md:w-[60%] lg:w-[50%] rounded-2xl h-100 bg-[#1a1a1a] flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          className="bg-white text-center text-black px-5 py-2 rounded-xl w-[80%] md:w-[50%]"
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          className="bg-white text-center text-black px-5 py-2 my-3 rounded-xl w-[80%] md:w-[50%]"
        />
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          className="bg-white text-center text-black px-5 py-2 mb-3 rounded-xl w-[80%] md:w-[50%]"
        />{" "}
        <input
          type="text"
          placeholder="Confirm Password"
          name="confirm"
          className="bg-white text-center text-black px-5 py-2 rounded-xl w-[80%] md:w-[50%]"
        />{" "}
        <br />
        <button className="text-black bg-white px-5 py-2 my-5 rounded-2xl w-30 font-worksans">
          Register
        </button>
        <Link to="/login" className="text-white underline cursor-pointer">
          Existing User? Log In now.
        </Link>
      </div>
    </div>
  );
};

export default Register;
