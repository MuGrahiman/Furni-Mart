import React from "react";

function Helmet(props) {
  document.title = "FurniMart - " + props.title;
  return <div className="w-100">{props.children}</div>;
}

export default Helmet;
