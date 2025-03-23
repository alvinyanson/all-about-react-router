import { useAuth } from '@/components/AuthProvider';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { currentUser, handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="alert alert-info" role="alert">
      <h4 className="alert-heading">Welcome User {currentUser?.id}!</h4>
      <p>Welcome back! You're now logged in.</p>
      <hr />
      <button onClick={handleLogout} className="btn btn-danger">
        Logout Now
      </button>

      <button
        onClick={() => navigate(`/profile/${currentUser?.id}`)}
        className="btn btn-info"
      >
        Go to Profile
      </button>
      <button onClick={() => navigate('/admin-only')} className="btn btn-info">
        Access Admin Page
      </button>
    </div>
  );
}

export default HomePage;
