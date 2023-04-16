import * as React from "react";

const HighlightIcon = ({ width = "48", height= "48", fill="currentColor", className = "bi bi-plus scale-150"}) => (
    
  <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 96 960 960" fill={fill} width={width}><path d="m203 393-100-99 65-65 99 100-64 64Zm231-105V145h91v143h-91Zm324 107-65-65 100-101 64 66-99 100Zm-429 620V797L209 677V443h543v234L632 797v218H329Zm91-91h120V757l120-118.783V525H300v113l120 119v167Zm60-200Z"/></svg>
);

export default HighlightIcon;