import React from "react";
import { IconProps } from "../Icon.interface";

export const ArrowLeft: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.95 15.356c.044.115.111.22.197.31l3.75 3.75a.94.94 0 1 0 1.331-1.332l-2.156-2.146h22.584a.937.937 0 1 0 0-1.875H5.072l2.156-2.147a.94.94 0 1 0-1.331-1.332l-3.75 3.75a.934.934 0 0 0-.197.31.928.928 0 0 0-.075.356.929.929 0 0 0 .075.356Z"
        fill="#545F7D"
      />
    </svg>
  );
};
