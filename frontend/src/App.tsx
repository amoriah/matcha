import { Outlet } from 'react-router';

export const App = () => {
  return (
    <>
      <Outlet />
      <div className="flex justify-center mt-10">
        <p className="text-bold text-5xl align-middle text-matcha-text">
          matcha app will be on this page!
        </p>
      </div>
    </>
  );
};
