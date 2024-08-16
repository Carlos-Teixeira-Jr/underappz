import * as React from "react";

type LogoutIconProps = {
  fill?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  style?: any;
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
};

const LogoutIcon = ({
  width = "50",
  height = "50",
  fill = "currentColor",
  className = "",
  style = {},
  onClick,
}: LogoutIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    height={height}
    viewBox="0 -800 960 960"
    width={width}
    fill={fill}
    onClick={onClick}
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
  </svg>
);

export default LogoutIcon;