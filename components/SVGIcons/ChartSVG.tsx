import React from "react";

export const ChartSVG: ISvgComponent = ({
  color = "black",
  width = "100%",
  height = "100%",
  className = "",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 21V9C22 7.89543 21.1046 7 20 7H16V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V9H4C2.89543 9 2 9.89543 2 11V21H22ZM14 4H10V19H14V4ZM8 19V11H4V19H8ZM20 19H16V9H20V19Z"
        fill={color}
      />
    </svg>
  );
};
