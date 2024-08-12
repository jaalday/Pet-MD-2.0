



import { useAuth } from "../AuthContext";

const Profile = () => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    if (!user) return <p>You are not logged in</p>;

    return (
        <div>
            <h1>Welcome, {user.email}</h1>
        </div>
    );
};

export default Profile;