import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const [accessToken, setAccessToken] = useState('')

  async function submitHandler(e) {
    e.preventDefault()

    if(!username || !email || !password || !confirm) {
      alert("Incomplete Inputs")
      return
    }

    if(confirm !== password) {
      alert("Passowrds don't match")
      return
    }

    const data = {
      username,
      email,
      password
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", data, { withCredentials: true })
  
      alert(res.data.message)

      setAccessToken(res.data.user.accessToken)
  
    } catch (error) {
        if(error?.response?.data?.passwordErrors) {
          alert(error?.response?.data?.passwordErrors);
          return
        }

        alert(error.response.data.message)
    }

  }

  return (
    <div className="w-screen min-h-screen pt-16 flex items-center justify-center">
      <form className="w-[80%] md:w-[60%] lg:w-[50%] rounded-2xl h-100 bg-[#1a1a1a] flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value.toLowerCase());
          }}
          name="username"
          className="bg-white text-center text-black px-5 py-2 rounded-xl w-[80%] md:w-[50%]"
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value.toLowerCase());
          }}
          name="email"
          className="bg-white text-center text-black px-5 py-2 my-3 rounded-xl w-[80%] md:w-[50%]"
        />
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          className="bg-white text-center text-black px-5 py-2 mb-3 rounded-xl w-[80%] md:w-[50%]"
        />{" "}
        <input
          type="text"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
          name="confirm"
          className="bg-white text-center text-black px-5 py-2 rounded-xl w-[80%] md:w-[50%]"
        />{" "}
        <br />
        <button onClick={e => { submitHandler(e) }} className="text-black bg-white px-5 py-2 my-5 rounded-2xl w-30 font-worksans">
          Register
        </button>
        <Link to="/login" className="text-white underline cursor-pointer">
          Existing User? Log In now.
        </Link>
      </form>
    </div>
  );
};

export default Register;
