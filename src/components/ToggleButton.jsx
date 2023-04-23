import React from "react";
import { BarsIcon } from "./BarsIcon";
import { GridIcon } from "./GridIcon";
import { STYLES } from "../constants";
import { useBrowserTheme } from "./useBrowserTheme";

export const ToggleButton = ({ on, onToggle }) => {
  const theme = useBrowserTheme();

  return (
    <div className="container" style={container(STYLES[theme].container)}>
      <div
        className="button"
        style={button(STYLES[theme].button)}
        onClick={onToggle}
      >
        <GridIcon fade={on} style={STYLES[theme].gridIcon} />
        <div
          className="thumb"
          style={thumb({ on, ...STYLES[theme].thumb })}
        ></div>
        <BarsIcon fade={!on} style={STYLES[theme].barsIcon} />
      </div>
    </div>
  );
};

const container = ({ backgroundColor }) => ({
  background: backgroundColor,
  borderRadius: "100px",
  maxWidth: "64px",
  height: "36px",
  boxSizing: "border-box",
  padding: "6px",
  cursor: "pointer",
});

const button = ({ color, borderColor }) => ({
  background: color,
  border: `0.1px solid ${borderColor}`,
  borderRadius: "100px",
  padding: "4px 6px",
  display: "flex",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
  maxHeight: "100%",
});

const thumb = ({ color, borderColor, on }) => ({
  heigth: "16px",
  width: on ? "16px" : "10px",
  border: `1px solid`,
  borderColor: borderColor,
  borderTopRightRadius: "100px",
  borderBottomRightRadius: "100px",
  borderTopLeftRadius: on ? "100px" : "20px",
  borderBottomLeftRadius: on ? "100px" : "20px",
  background: color,
  minHeight: "16px",
  position: "absolute",
  right: on ? "calc(44px - 14px)" : "2px",
  transition: "right 0.3s ease-in-out",
  boxShadow: "rgba(57, 96, 239, 0.5) 0px 0px 60px 15px",
});
