import { type ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useStore } from '@store';

interface AuthProviderProps {
  component: ReactNode;
}

export const AuthProvider = ({ component }: AuthProviderProps) => {
  const isAuth = useStore(state => state.isAuth);

  if (!isAuth) {
    return <Navigate to="/matcha/signin" />;
  }

  return component;
};
