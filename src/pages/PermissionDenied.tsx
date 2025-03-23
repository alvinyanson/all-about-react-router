import { useNavigate } from 'react-router-dom';

function PermissionDenied() {
  const navigate = useNavigate();

  return (
    <div className="alert alert-info" role="alert">
      <h4 className="alert-heading">Permission Denied!</h4>
      <button onClick={() => navigate(-1)} className="btn btn-dark">
        Back
      </button>
    </div>
  );
}

export default PermissionDenied;
