import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import CustomSpinner from "@/components/CustomSpinner";
import { ReactNode } from "react";

interface PrivateRoutesProps {
  children: ReactNode;
}

const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <CustomSpinner />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
