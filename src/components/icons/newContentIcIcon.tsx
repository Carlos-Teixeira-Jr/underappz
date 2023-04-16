import * as React from "react";

const NewContentIcon = ({ width = "48", height= "48", fill="currentColor", className = "bi bi-plus scale-150"}) => (
    
  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} height={height} viewBox="0 96 960 960" width={width}><path d="M448 692h66v-82h82v-66h-82v-83h-66v83h-83v66h83v82ZM119 878v-92h93V504q0-92.259 53.5-165.63Q319 265 409 242.583V219q0-29.667 20.605-49.333Q450.211 150 479.647 150t50.395 19.667Q551 189.333 551 219v23.583Q642 264 696.5 337.741 751 411.481 751 504v282h91v92H119Zm361-316Zm.544 436q-35.019 0-61.281-25.556Q393 946.888 393 911h175q0 37-25.924 62-25.925 25-61.532 25ZM303 786h356V504q0-74.062-51.763-126.031Q555.475 326 481 326t-126.237 51.969Q303 429.938 303 504v282Z"/></svg>
);

export default NewContentIcon;