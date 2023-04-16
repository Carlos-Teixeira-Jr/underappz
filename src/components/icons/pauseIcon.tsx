import * as React from "react";

const PauseIcon = ({ width = "48", height= "48", fill="currentColor", className = "bi bi-plus scale-150"}) => (
    
  <svg xmlns="http://www.w3.org/2000/svg" height={height} fill={fill} viewBox="0 96 960 960" width={width}><path d="M524 898V253h279v645H524Zm-367 0V253h279v645H157Zm459-92h95V345h-95v461Zm-367 0h95V345h-95v461Zm0-461v461-461Zm367 0v461-461Z"/></svg>
);
export default PauseIcon;