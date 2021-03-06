//8. Individual File for Individual Component
import React from "react";

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

export default Pet;
