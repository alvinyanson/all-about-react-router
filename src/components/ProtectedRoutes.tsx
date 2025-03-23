import PermissionDenied from '@/pages/PermissionDenied';
import { User } from '@/types/user';
import { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: User['role'][];
};

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { currentUser } = useAuth();

  if (currentUser === undefined || currentUser === null) {
    return <Navigate to="/signin" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
    return <PermissionDenied />;
  }

  return <Outlet />;
}
