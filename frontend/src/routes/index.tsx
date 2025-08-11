import { Navigate } from 'react-router';
import { AuthProvider } from '@features/auth/AuthProvider';
import { SignInForm, SignUpForm, ApproveSignUp, TokenPage } from '@pages';
import { Layout } from '@components';
import { App } from '../App';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/matcha" />,
      },
      {
        path: '/matcha',
        element: <AuthProvider component={<App />} />,
      },
      {
        path: '/matcha/approve',
        element: <AuthProvider component={<ApproveSignUp />} />,
      },

      {
        path: '/matcha/signup',
        element: <SignUpForm />,
      },
      {
        path: '/matcha/signin',
        element: <SignInForm />,
      },
      {
        path: '/matcha/signup/:token',
        element: <TokenPage />,
      },
    ],
  },
];

export default routes;
