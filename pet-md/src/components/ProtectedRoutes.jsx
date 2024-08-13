import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";



const ProtectedRoutesLayout = () => {
  const {user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }


};

export default ProtectedRoutesLayout;
