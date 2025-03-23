import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './components/AuthProvider.tsx';
import ProtectedRoute from './components/ProtectedRoutes.tsx';
import Profile from './pages/Profile.tsx';
import SignIn from './pages/SignIn.tsx';
import HomePage from './pages/Homepage.tsx';
import AdminOnly from './pages/AdminOnly.tsx';

const router = createBrowserRouter([
  {
    // Protected routes group
    path: '/',
    element: <ProtectedRoute allowedRoles={['editor']} />,
    children: [
      {
        index: true, // Renders HomePage at "/"
        element: <HomePage />,
      },
      {
        path: 'profile/:id',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/admin-only',
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      {
        index: true,
        element: <AdminOnly />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container">
      <div className="row">
        <div className="col-12 p-5">
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </div>
      </div>
    </div>
  </StrictMode>
);
