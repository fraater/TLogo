import type { IconType } from 'react-icons';

export type IconFormat = 'png' | 'svg';

export type IconSize = {
  iconWidth: number;
  iconHeight: number;
};

export type IconData = {
  icon: {
    Icon: IconType;
    size: number;
    rotate: number;
    borderWidth: number;
    borderColor: string;
    fillColor: string;
  };
  background: {
    rounded: number;
    padding: number;
    bgColor: string;
  };
};
