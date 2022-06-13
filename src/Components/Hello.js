import React from "react";

const Hello = () => {
  // ___________With JSX_____________
  // return (
  //     <div className="hello" id="aj">
  //         <h1>Hello Lokesh</h1>
  //     </div>
  // )
  // ___________Without JSX___________
  return React.createElement(
    "div",
    { id: "aj", className: "hello" },
    React.createElement("h1", null, "Hello Lokesh")
  );
};

export default Hello;
