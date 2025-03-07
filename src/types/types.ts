import type { IconType } from 'react-icons';

export type IconData = {
  icon: {
    Icon: IconType;
    size: number;
    borderColor: string;
  };
  background: {
    rounded: number;
    padding: number;
  };
};
