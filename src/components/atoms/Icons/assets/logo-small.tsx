import React from "react";
import { IconProps } from "../Icon.interface";

export const LogoSmall: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width={145}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.221c0-.46.37-.833.825-.833H3.3a.83.83 0 0 1 .825.833v15.003c0 .46.37.833.825.833h10.725a.83.83 0 0 0 .825-.833v-2.5a.83.83 0 0 0-.825-.834h-4.95c-1.367 0-2.475-1.12-2.475-2.5V3.887c0-1.38 1.108-2.5 2.475-2.5h7.425c1.367 0 2.475 1.12 2.475 2.5v15.836c0 1.38-1.108 2.5-2.475 2.5H2.475c-1.367 0-2.475-1.12-2.475-2.5V2.22ZM16.5 6.39a.83.83 0 0 0-.825-.834h-3.3v3.334c0 .46.37.833.825.833h3.3V6.39Z"
        fill="url(#a)"
      />
      <path
        d="M29.438 0v23.171h3.97V0h-3.97ZM52.949 16.442c.623-6.73-2.756-10.11-8.17-10.11-5.25 0-8.597 3.58-8.597 8.552 0 5.238 3.314 8.718 8.892 8.718 2.46 0 5.25-.862 6.956-2.652l-2.56-2.552c-.918.961-2.854 1.525-4.33 1.525-2.822 0-4.561-1.459-4.824-3.481H52.95Zm-12.567-3.348c.59-2.122 2.362-3.182 4.528-3.182 2.297 0 3.937 1.06 4.2 3.182h-8.728ZM71.948 23.171v-8.585c0-5.138-3.052-8.022-6.858-8.022-2.035 0-3.675.828-5.316 2.453l-.262-2.221h-3.577V23.17h3.97v-8.353c0-2.486 1.674-4.575 4.135-4.575 2.56 0 3.904 1.89 3.904 4.376v8.552h4.004ZM83.23 10.21c2.527 0 4.692 1.923 4.692 4.773 0 2.95-2.165 4.807-4.692 4.807-2.56 0-4.594-1.956-4.594-4.807 0-2.95 2.035-4.773 4.594-4.773ZM88.185 0v9.05c-.952-1.69-3.61-2.62-5.316-2.62-4.725 0-8.236 2.918-8.236 8.553 0 5.37 3.577 8.553 8.335 8.553 1.968 0 3.97-.663 5.217-2.619l.262 2.254h3.74V0h-4.002ZM108.468 8.52c-1.87-1.658-3.773-2.155-6.3-2.155-2.953 0-6.825 1.326-6.825 5.105 0 3.712 3.642 4.84 6.694 5.071 2.297.133 3.216.597 3.216 1.724 0 1.194-1.411 1.99-2.921 1.956-1.804-.033-4.43-.994-5.578-2.287l-1.969 2.884c2.363 2.486 4.922 2.917 7.482 2.917 4.626 0 6.956-2.486 6.956-5.37 0-4.343-3.872-5.039-6.924-5.238-2.067-.133-3.018-.73-3.018-1.79 0-1.028 1.05-1.624 2.953-1.624 1.542 0 2.855.364 4.003 1.458l2.231-2.652ZM119.599 19.657c-2.724 0-4.594-2.088-4.594-4.64 0-2.553 1.706-4.641 4.594-4.641 2.887 0 4.593 2.088 4.593 4.64 0 2.553-1.87 4.641-4.593 4.641ZM128.556 30V6.829h-3.74l-.263 2.254c-1.247-1.823-3.412-2.619-5.25-2.619-4.987 0-8.301 3.746-8.301 8.553 0 4.773 2.986 8.552 8.17 8.552 1.706 0 4.233-.53 5.381-2.32V30h4.003ZM132.073 6.829V23.17h4.003v-8.618c0-3.017 1.936-4.144 4.036-4.144 1.312 0 2.067.364 2.887 1.06l1.805-3.513c-.886-.895-2.494-1.558-4.167-1.558-1.641 0-3.314.298-4.561 2.32l-.295-1.89h-3.708Z"
        fill="#213F7D"
      />
      <defs>
        <linearGradient
          id="a"
          x1={0}
          y1={32.434}
          x2={21.878}
          y2={-3.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#213F7D" />
          <stop offset={1} stopColor="#39CDCC" />
        </linearGradient>
      </defs>
    </svg>
  );
};
