import { useAuth } from '@/components/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { currentUser, handleLogout } = useAuth();
  const navigate = useNavigate();


  return (
    <div className="alert alert-info" role="alert">
      <h4 className="alert-heading">Welcome User {currentUser?.id}!</h4>
      <p>Your Profile.</p>
      <hr />
      <button onClick={() => navigate('/')} className="btn btn-dark">
        Go to Home
      </button>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout Now
      </button>
    </div>
  );
}

export default Profile;
