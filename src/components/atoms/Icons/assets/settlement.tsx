import React from "react";
import { IconProps } from "../Icon.interface";

export const Settlement: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width={16}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M13.6 2.4v7.2h-6a.4.4 0 0 0-.4.4v.8a2 2 0 0 1-4 0V1.625A1.625 1.625 0 0 0 1.575 0H11.2a2.403 2.403 0 0 1 2.4 2.4Z"
        />
        <path d="M1.6 0A1.6 1.6 0 0 0 0 1.6v1.2a.4.4 0 0 0 .4.4h2.8V1.625A1.625 1.625 0 0 0 1.6 0Zm3.2 12.8h.4c-.065 0-.128-.003-.192-.01-.068.007-.138.01-.208.01Zm10.8-3.2h-8a.4.4 0 0 0-.4.4v.8a2 2 0 0 1-2 2h8A2.8 2.8 0 0 0 16 9.998a.4.4 0 0 0-.4-.398Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v12.8H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
