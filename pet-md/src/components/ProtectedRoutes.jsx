import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Navigation from "./Navigation";



const ProtectedRoutesLayout = () => {
  const {isAuth } = useAuth();
  if (isAuth === null) {
    return <div>Loading...</div>;
  }
console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />;

  }
  return (
  <>
  <Navigation/>,
  
  <Outlet />;
  </>
  )

};

export default ProtectedRoutesLayout;
