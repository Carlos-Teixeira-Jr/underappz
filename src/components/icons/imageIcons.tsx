import * as React from "react";

const ImageIcon = ({ width = "48", height= "48", fill="currentColor", className = "bi bi-plus scale-150"}) => (
    
  <svg xmlns="http://www.w3.org/2000/svg" height={height} fill={fill} viewBox="0 96 960 960" width={width}><path d="M189 958q-37.175 0-64.088-26.912Q98 904.175 98 867V285q0-37.588 26.912-64.794Q151.825 193 189 193h582q37.588 0 64.794 27.206Q863 247.412 863 285v582q0 37.175-27.206 64.088Q808.588 958 771 958H189Zm0-91h582V285H189v582Zm36-81h511L578 569 446 739l-93-127-128 174Zm-36 81V285v582Z"/></svg>
);
export default ImageIcon;