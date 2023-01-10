import React from "react";
import { IconProps } from "../Icon.interface";

export const ActiveUser: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M4.988 6.61A3.363 3.363 0 0 1 6.871.558V.555H7a3.362 3.362 0 0 1 2.011 6.054l-.18.135.214.07a6.528 6.528 0 0 1 2.257 1.287.39.39 0 0 1 .037.556.39.39 0 0 1-.556.037l.099-.113-.099.113A5.75 5.75 0 0 0 7.14 7.276h-.017c-.041.002-.084.004-.124.004l-.12-.003H6.86c-2.654.064-4.95 1.966-5.492 4.57a.655.655 0 0 0 .133.546l.018.023a.65.65 0 0 0 .482.217h4.512a.39.39 0 0 1 .394.394.39.39 0 0 1-.394.394H2c-.435 0-.838-.192-1.112-.529a1.432 1.432 0 0 1-.292-1.205L4.988 6.61Zm0 0 .18.135m-.18-.135.18.135m2.693 4.316.105-.107 1.632 1.592.009.008a.413.413 0 0 0 .298.102.414.414 0 0 0 .279-.136l2.534-3.536a.389.389 0 0 1 .255-.16l.076-.012.008.008-3.108 4.624.01-.001c.33-.022.641-.184.85-.441l-.004.004-.002.002-.001-.001m-2.94-1.946a.24.24 0 0 0-.346.005.24.24 0 0 0 .004.345l1.635 1.595c.195.186.456.289.724.289.027 0 .05 0 .068-.002m-2.086-2.232 1.633 1.592M7.86 11.061l1.633 1.592m.453.64v.15H9.96l-.006-.076-.005-.055-.002-.019Zm0 0h.002c.247-.016.482-.122.659-.293a.219.219 0 0 0 .049.035.265.265 0 0 0 .082.004.269.269 0 0 0 .034-.013c.013-.006.021-.013.024-.015l.005-.004m0 0 .002-.002.002-.002a.18.18 0 0 0 .006-.005l.001-.002.002-.002.002-.002-.073-.055-.034-.025-.013-.01.014.013.004.005.087.087Zm-1.308-.354.001.003a.563.563 0 0 0 .806-.043l-.807.04ZM5.169 6.745l-.215.07a6.538 6.538 0 0 0-4.357 4.872L5.17 6.745Zm-.745-2.71v-.118a2.58 2.58 0 0 1 2.57-2.574H7a2.58 2.58 0 0 1 2.574 2.574A2.58 2.58 0 0 1 7.13 6.488h-.01v.001a4.595 4.595 0 0 0-.201 0H6.868c-1.265-.064-2.263-1.065-2.392-2.32l-.014-.134h-.038Z"
          fill="#545F7D"
          stroke="#545F7D"
          strokeWidth={0.3}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
