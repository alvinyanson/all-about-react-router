import { useAuth } from '@/components/AuthProvider';
import { Link } from 'react-router-dom';

function SignIn() {
  const { authToken, handleLogin } = useAuth();
  return (
    <>
      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">Sign In!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <Link to="/">HomePage</Link>
        <p>AuthToken - {authToken}</p>
        <hr />
        <button onClick={handleLogin} className="btn btn-dark">
          Login
        </button>
      </div>
    </>
  );
}

export default SignIn;
