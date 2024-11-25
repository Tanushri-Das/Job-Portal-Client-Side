import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ReactNode } from "react";
import CustomLoader from "@/components/CustomLoader/CustomLoader";

interface PrivateRoutesProps {
  children: ReactNode;
}

const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <CustomLoader />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
