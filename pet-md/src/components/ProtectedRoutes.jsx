import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Navigation from "../components/Navigation";


const ProtectedRoutesLayout = () => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navigation />
      <Outlet />
      
    </>
  );
};

export default ProtectedRoutesLayout;
