import * as React from "react";

const VideoIcon = ({ width = "48", height= "48", fill="currentColor", className = "bi bi-plus scale-150"}) => (
    
  <svg xmlns="http://www.w3.org/2000/svg" height={height} fill={fill} viewBox="0 96 960 960" width={width}><path d="m152 233 72 149h130l-72-149h88l72 149h131l-73-149h89l72 149h130l-72-149h91q37.588 0 64.794 27.906Q902 288.812 902 325v502q0 35.775-27.206 63.388Q847.588 918 810 918H150q-37.175 0-64.088-25.938Q59 866.125 59 829V325q0-36.463 27.475-64.731Q113.95 232 152 233Zm-2 241v353h660V474H150Zm0 0v353-353Z"/></svg>
);
export default VideoIcon;