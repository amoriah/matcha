// import { ProfileForm } from '@features/profile/ProfileForm';
import { Outlet } from 'react-router';
import { UserCard } from '@features/userCard/UserCard';

export const App = () => {
  return (
    <>
      <Outlet />
      {/* <ProfileForm /> */}
      <UserCard />
    </>
  );
};
