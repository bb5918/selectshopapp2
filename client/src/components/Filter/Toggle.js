import React, { useState } from "react";
import { Checkbox, Collapse, Switch } from "antd";
const { Panel } = Collapse;

function Toggle(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };
  const render = () =>
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Switch
          onChange={() => handleToggle(value._id)}
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
        <br />
      </React.Fragment>
    ));
  return <div>{render()}</div>;
}

export default Toggle;
