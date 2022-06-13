import React from "react";

// function Greet(props) {
//     return <h1>Hello, {props.name}</h1>
// }

const Greet = ({name, children}) => {
    return (
        <div>
            <h1>Hello, {name}</h1>
            {children}
        </div>
    )
};

export default Greet;
// export { Greet };