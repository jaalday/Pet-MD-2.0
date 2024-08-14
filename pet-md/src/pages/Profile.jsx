



import { useAuth } from "../AuthContext";


const Profile = () => {

    const { isAuth } = useAuth();

    


 

    return (
        <div className="profile">
            <h1>Welcome</h1>

        </div>
    );
};

export default Profile;