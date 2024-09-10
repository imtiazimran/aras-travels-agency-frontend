import { Navigate } from "react-router-dom";
import { selectUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const PrivetRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAppSelector(selectUser);
  if(user?.role !== "admin") {
    
    return <Navigate to="/" />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivetRoute;
