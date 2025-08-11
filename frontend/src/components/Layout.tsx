import { Outlet } from 'react-router';
import { NotificationContainer } from '@features/notification/components/NotificationContainer';

export const Layout = () => {
  return (
    <>
      <NotificationContainer />
      <Outlet />
    </>
  );
};
