import { useAuth } from '../components/AuthProvider';

export default function HomePage() {
  const { logout, user } = useAuth();
  return (
    <>
      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">Welcome User {user?.id}!</h4>
        <p>Welcome back! You're now logged in.</p>
        <hr />
        <button onClick={logout} className="btn btn-danger">
          Logout Now
        </button>
      </div>
    </>
  );
}
