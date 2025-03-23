import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';
import { useEffect } from 'react';

export default function SignInPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  console.log('User', user?.id);

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true }); // Redirect if signed in
    }
  }, [user, navigate]);

  return (
    <>
      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">Sign In</h4>
        <p>You've been logged out. See you next time!</p>
        <hr />
        <button onClick={login} className="btn btn-dark">
          Login
        </button>
      </div>
    </>
  );
}
