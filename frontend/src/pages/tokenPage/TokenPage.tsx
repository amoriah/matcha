import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export const TokenPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );

  useEffect(() => {
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        navigate('/matcha');
      }, 4000);
    }, 4000);
  }, [token]);

  return (
    <div>
      {status === 'loading' && (
        <p className="text-bold text-3xl align-middle">check your token</p>
      )}
      {status === 'success' && (
        <p className="text-bold text-3xl align-middle">token: {token}!</p>
      )}
    </div>
  );
};
