import * as React from "react";

const StopIcon = ({ width = "48", height= "48", fill="currentColor", className = "bi bi-plus scale-150"}) => (
    
  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} height={height} viewBox="0 96 960 960" width={width}><path d="M309 405v342-342Zm-91 433V313h525v525H218Zm91-91h342V405H309v342Z"/></svg>
);

export default StopIcon;