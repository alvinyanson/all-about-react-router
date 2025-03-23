import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './components/AuthProvider.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import './index.css';
import HomePage from './pages/Homepage.tsx';
import SignInPage from './pages/SignInPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
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
