import * as React from "react";

const NoteIcon = ({ width = "48", height= "48", fill="currentColor", className = "bi bi-plus scale-150"}) => (
    
  <svg xmlns="http://www.w3.org/2000/svg" height="48" fill={fill} viewBox="0 96 960 960" width={width}><path d="M226 864 61 700l65-64 100 99 179-180 64 66-243 243Zm0-320L61 380l65-64 100 99 179-180 64 66-243 243Zm299 237v-91h374v91H525Zm0-320v-91h374v91H525Z"/></svg>
);
export default NoteIcon;