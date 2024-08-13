



import { useAuth } from "../AuthContext";


const Profile = () => {

    const { user } = useAuth();

    


 

    return (
        <div>
            <h1>Welcome, {user.email}</h1>
        </div>
    );
};

export default Profile;