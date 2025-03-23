import { useAuth } from '@/components/AuthProvider';

function AdminOnly() {
  const { currentUser, handleLogout } = useAuth();

  return (
    <div className="alert alert-info" role="alert">
      <h4 className="alert-heading">Welcome Admin User {currentUser?.id}!</h4>
      <p>Welcome back! You're now logged in.</p>
      <hr />
      <button onClick={handleLogout} className="btn btn-danger">
        Logout Now
      </button>
    </div>
  );
}

export default AdminOnly;
