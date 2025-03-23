import { useAuth } from '@/components/AuthProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const { currentUser, handleLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      if (currentUser?.role === 'admin') {
        navigate('/admin-only', { replace: true });
      } else if (currentUser?.role === 'editor') {
        navigate('/', { replace: true });
      }
    }
  }, [currentUser, navigate]);

  return (
    <>
      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">Sign In</h4>
        <p>You've been logged out. See you next time!</p>
        <hr />
        <button onClick={handleLogin} className="btn btn-dark">
          Login
        </button>
      </div>
    </>
  );
}

export default SignIn;
