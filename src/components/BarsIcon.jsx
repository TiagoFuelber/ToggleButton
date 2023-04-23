import React from "react";

export const BarsIcon = ({ fade, style }) => {
  return (
    <svg
      viewBox="0 0 8 8"
      height="100%"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: "transparent",
        opacity: fade ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <rect x="0" y="0.5" width="14" height="1" rx="0.75" fill={style.color} />
      <rect x="0" y="2.5" width="14" height="1" rx="0.75" fill={style.color} />
      <rect x="0" y="4.5" width="14" height="1" rx="0.75" fill={style.color} />
      <rect x="0" y="6.5" width="14" height="1" rx="0.75" fill={style.color} />
    </svg>
  );
};
