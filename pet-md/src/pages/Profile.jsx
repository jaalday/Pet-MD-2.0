



import { useAuth } from "../AuthContext";
const user = JSON.parse(localStorage.getItem('user'));

const Profile = () => {

   user = JSON.parse(sessionStorage.getItem('user'));
    if (user === null) {
        return <Navigate to="/" />

    }


 

    return (
        <div>
            <h1>Welcome, {user.email}</h1>
        </div>
    );
};

export default Profile;