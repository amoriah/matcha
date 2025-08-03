import {
  ChatSvg,
  FavoritesSvg,
  FilterSvg,
  LocationSvg,
  ProfileSvg,
} from '@assets/svg';
import { Svg } from '@components';

export const BottomMenu = () => (
  <div className="flex justify-between items-center  w-full px-6  ">
    <Svg component={<ChatSvg />} />
    <Svg component={<FilterSvg />} />
    <Svg component={<FavoritesSvg />} />
    <Svg component={<LocationSvg />} />
    <Svg component={<ProfileSvg />} />
  </div>
);
