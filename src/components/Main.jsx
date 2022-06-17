import React from "react";
import { useState } from "react/cjs/react.development";

import TableData from "./TableData";
import Map from "./Map";
function Main({ searchedText }){
  return(
      <div className="main">
        {/* <Map /> */}
          <TableData searchedText={searchedText}/>
      </div>
     
  );
}
export default Main;