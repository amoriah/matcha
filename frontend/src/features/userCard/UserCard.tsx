import { LeftArrowSvg, RightArrowSvg } from '@assets/svg';
import { Divider, Svg } from '@components';
import { BottomMenu } from './BottomMenu';
import { useState } from 'react';

const users = [
  { id: 1, img: './../src/assets/shalame.jpg' },
  { id: 2, img: './../src/assets/pit.jpg' },
  { id: 3, img: './../src/assets/dikaprio.jpg' },
  { id: 4, img: './../src/assets/bob.png' },
];

export const UserCard = () => {
  const [index, setIndex] = useState(0);
  
  const nextIndex = (index + 1) % users.length;
  const prevIndex = (index - 1 + users.length) % users.length;

  const handleSwipe = (dir: 'left' | 'right') => {
    setIndex(dir === 'right' ? nextIndex : prevIndex);
  };

  return (
    <div className="w-full h-dvh flex items-start pt-4 pb-4 justify-center">
      <div className="flex flex-col h-full  items-center gap-4 p-6 border border-gray-100 rounded-lg shadow-2xl w-3xl shadow-lime-400">
        <div className="h-9/10 relative">
          <img
            src={users[index].img}
            alt="user"
            className="w-full h-full object-cover rounded-3xl"
          />
          <Svg
            component={<RightArrowSvg />}
            click={() => handleSwipe('right')}
            style={'absolute top-5/10 -right-25'}
            hoverStyle={'hover:-right-26'}
          />
          <Svg
            component={<LeftArrowSvg />}
            click={() => handleSwipe('left')}
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
