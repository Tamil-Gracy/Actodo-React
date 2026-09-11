
import { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import App from "../App";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userValid, setUserValid] = useState(true);
    const [errMsg, setErrMsg] = useState('');
    const users = props.users;
    const setUsers = props.setUsers;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const isUserExists = users.filter((user) => {
            if (user.username == username && user.password != password) {
                setErrMsg('Password incorrect...Please check your password....')
                setUserValid(false)
                return false;
            } else if (user.username != username && user.password == password) {
                setErrMsg('Username incorrect...Please check your username....')
                setUserValid(false)
                return false;
            } else if (user.username != username && user.password != password) {
                setErrMsg('Login failed...Please signup before login ...')
                setUserValid(false)
                return false;
            } else if (user.username == username && user.password == password) {
                setUserValid(true)
                return true;
            }
        })
        if (isUserExists.length > 0) {
            //console.log('Login successful...');
            setErrMsg('Login successful...')
            setUserValid(true)
            navigate('/dashboard', { state: { username: username } })
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl text-blue-950 font-bold text-center mb-2 p-3">
                    Actodo Management App
                </h1>
                <h2 className="text-xl font-bold text-center mb-2">
                    Login
                </h2>
                {
                    userValid ? '' : <p className="text-red-800 py-2">{errMsg}</p>
                }
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Username */}
                    <div>
                        <label className="block mb-1 font-medium">
                            Username
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
                    >
                        Login
                    </button>

                    <span>Don't have an account? <Link to={"/signup"} className="underline text-blue-600"> Sign Up </Link>here</span>
                </form>
            </div>
        </div>
    );
};

export default Login;