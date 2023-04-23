import React from "react";

const Square = ({ x, y, borderColor, color }) => {
  const size = 2.2;
  return (
    <rect
      x={x}
      y={y}
      width={size}
      height={size}
      rx=".5"
      stroke={borderColor}
      stroke-width="1"
      fill={color}
    />
  );
};

export const GridIcon = ({ fade, style }) => {
  const center = 4.8;
  const start = 0.5;

  const ColoredSquare = (props) => (
    <Square color={style.color} borderColor={style.borderColor} {...props} />
  );

  return (
    <svg
      viewBox="0 0 7.5 7.5"
      width="14"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: "transparent",
        opacity: fade ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <ColoredSquare x={start} y={start} />
      <ColoredSquare x={center} y={start} />
      <ColoredSquare x={start} y={center} />
      <ColoredSquare x={center} y={center} />
    </svg>
  );
};
