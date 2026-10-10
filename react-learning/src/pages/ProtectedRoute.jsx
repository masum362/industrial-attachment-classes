import { Navigate, useLocation } from "react-router";

export const ProtectedRoute = ({ isAuthenticate, aprovedRole, children }) => {
  const location = useLocation();

  const userRole = "admin";

  if (!isAuthenticate) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (!aprovedRole.includes(userRole)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
