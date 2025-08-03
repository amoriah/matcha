// import { ProfileForm } from '@features/profile/ProfileForm';
import { UserCard } from '@features/userCard/UserCard';
import { Outlet } from 'react-router';

const users = [
  { id: 1, img: './../src/assets/shalame.jpg' },
  { id: 2, img: './../src/assets/shalame.jpg' },
  { id: 3, img: './../src/assets/shalame.jpg' },
];

export const App = () => {
  return (
    <>
      <Outlet />
      {/* <ProfileForm /> */}
      <UserCard />
    </>
  );
};
