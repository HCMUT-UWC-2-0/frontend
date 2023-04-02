import React from "react";

export const BellSVG: ISvgComponent = ({
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
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 7.54541C16 5.94984 15.3679 4.41962 14.2426 3.29138C13.1174 2.16314 11.5913 1.5293 10 1.5293C8.4087 1.5293 6.88258 2.16314 5.75736 3.29138C4.63214 4.41962 4 5.94984 4 7.54541C4 14.5642 1 16.5696 1 16.5696H19C19 16.5696 16 14.5642 16 7.54541Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
