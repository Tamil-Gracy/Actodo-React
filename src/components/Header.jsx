import { useNavigate } from "react-router-dom";
const Header = (props) => {
    const userData = props.userData;
    const navigate = useNavigate();
    //console.log(userData.state)
    if (userData.state == null) {
        navigate('/')
        return
    } else {
        const handleLogout = () => {
            navigate('/')
        }
        return (
            <div className='header flex justify-between items-center'>
                <div className="profile-info">
                    <h1 className='text-xl font-semibold capitalize'>Hello {userData.state.username} !</h1>
                    <p className='text-md'>I help you manage your activities :)</p>
                </div>
                <div className="logout">
                    <button className="bg-red-900 text-white px-4 py-2 rounded cursor-pointer" onClick={handleLogout}>Logout</button>
                </div>

            </div>
        );
    }
}

export default Header;