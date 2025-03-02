import type { IconType } from 'react-icons';

export type IconData = {
  icon: {
    Icon: IconType;
    size: number;
  };
  background: {
    rounded: number;
    padding: number;
  };
};
