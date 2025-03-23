import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './components/AuthProvider.tsx';
import ProtectedRoute from './components/ProtectedRoutes.tsx';
import HomePage from './pages/HomePage.tsx';
import Profile from './pages/Profile.tsx';
import SignIn from './pages/SignIn.tsx';

const router = createBrowserRouter([
  {
    // Protected routes group
    path: '/',
    element: <ProtectedRoute allowedRoles={['admin', 'viewer']} />,
    children: [
      {
        index: true, // Renders HomePage at "/"
        element: <HomePage />,
      },
      {
        path: 'profile/:id',
        element: <Profile />,
      }
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  // {
  //   path: '/protected',
  //   element: (
  //     <ProtectedRoute allowedRoles={['admin', 'viewer']}>
  //       <div>Protected content</div>
  //     </ProtectedRoute>
  //   ),
  // },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container">
      <div className="row">
        <div className="col-12 p-5">
          {/* for demo purposes we can input here 'isSignedIn' but we won't! */}
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </div>
      </div>
    </div>
  </StrictMode>
);
