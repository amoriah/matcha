import { LeftArrowSvg, RightArrowSvg } from '@assets/svg';
import { Divider, Svg } from '@components';
import { BottomMenu } from './BottomMenu';

export const UserCard = () => {
  return (
    <div className="w-full h-dvh flex items-start pt-4 pb-4 justify-center">
      <div className="flex flex-col h-full  items-center gap-4 p-6 border border-gray-100 rounded-lg shadow-2xl w-3xl shadow-lime-400">
        <div className="h-9/10 relative">
          <img
            src="./../src/assets/shalame.jpg"
            alt="user"
            className="w-full h-full object-cover rounded-3xl"
          />
          <Svg
            component={<RightArrowSvg />}
            style={'absolute top-5/10 -right-25'}
            hoverStyle={'hover:-right-26'}
          />
          <Svg
            component={<LeftArrowSvg />}
            style={'absolute top-5/10 -left-25'}
            hoverStyle={'hover:-left-26'}
          />
        </div>
        <Divider />
        <BottomMenu />
      </div>
    </div>
  );
};
