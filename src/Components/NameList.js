import React from "react";

function NameList() {
  let names = ["Lokesh", "Medha", "Deepak"];
  let nameList = names.map((name) => <h2>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
