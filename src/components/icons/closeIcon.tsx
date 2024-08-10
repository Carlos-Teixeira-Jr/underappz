import * as React from "react";

type CloseIconProps = {
  fill?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  style?: any;
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
};

const CloseIcon = ({
  width = "48",
  height = "48",
  fill = "currentColor",
  className = "",
  style = {},
  onClick,
}: CloseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    height={height}
    viewBox="0 96 960 960"
    width={width}
    fill={fill}
    onClick={onClick}
  >
    <path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z" />
  </svg>
);

export default CloseIcon;
