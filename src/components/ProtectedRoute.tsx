import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './AuthProvider';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.user === null) {
      navigate('/signin', { replace: true });
    }
  }, [navigate, authContext.user]);

  return children;
}
