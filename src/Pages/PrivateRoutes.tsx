import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const PrivateRoutes = ({ children }: any) => {
  const location = useLocation();
  const auth: any = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
