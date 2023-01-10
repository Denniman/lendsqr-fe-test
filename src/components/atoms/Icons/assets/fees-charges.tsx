import React from "react";
import { IconProps } from "../Icon.interface";

export const FeesCharges: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M0 12.666V14c0 1.103 2.688 2 6 2 3.313 0 6-.897 6-2v-1.334C10.71 13.575 8.35 14 6 14s-4.71-.425-6-1.334ZM10 4c3.313 0 6-.897 6-2s-2.688-2-6-2C6.687 0 4 .897 4 2s2.688 2 6 2ZM0 9.387V11c0 1.103 2.688 2 6 2 3.313 0 6-.897 6-2V9.387C10.71 10.45 8.347 11 6 11s-4.71-.55-6-1.613Zm13 .344c1.79-.347 3-.99 3-1.731V6.666c-.725.512-1.79.862-3 1.078V9.73ZM6 5C2.687 5 0 6.119 0 7.5S2.688 10 6 10c3.313 0 6-1.119 6-2.5S9.312 5 6 5Zm6.853 1.76C14.728 6.421 16 5.76 16 5V3.666c-1.11.784-3.016 1.206-5.022 1.306.922.447 1.6 1.047 1.875 1.787Z"
          fill="#213F7D"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
