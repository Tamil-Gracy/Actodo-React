
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userValid, setuserValid] = useState(true);
    const [errMsg, setErrMsg] = useState('');
    const users = props.users;
    const setusers = props.setusers;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username == '') {
            //alert("Enter username...");
            setuserValid(false)
            setErrMsg('Enter username...')
            return
        } else if (password !== confirmPassword) {
            //alert("Passwords do not match");
            setuserValid(false)
            setErrMsg('Passwords do not match')
            return
        } else {
            //alert("Registration successfull..");
            setuserValid(true)
            setErrMsg('Registration successfull..')
        }
        if (userValid) {
            const userAlreadyRegistered = users.filter((user) => {
                if (user.username == username && user.password == password) {
                    return true;
                } else {
                    return false;
                }
            })
            if (userAlreadyRegistered.length > 0) {
                console.log('User already exists')
            }else{
                setusers([
                    ...users,
                    {
                        id: users.length + 1,
                        username: username,
                        password: password
                    }
                ])
                console.log("Signup successful!")
                navigate("/")
            }
        }

    }
console.log(users)
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl text-blue-950 font-bold text-center mb-2 p-3">
                Actodo Management App
            </h1>
            <h2 className="text-2xl font-bold text-center mb-2">
                Sign Up
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

                {/* Confirm Password */}
                <div>
                    <label className="block mb-1 font-medium">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
                >
                    Sign Up
                </button>
                <span>Already have an account? <Link to={"/"} className="underline text-blue-600"> Login </Link> here</span>
            </form>
        </div>
    </div>
);
}
export default Signup;
