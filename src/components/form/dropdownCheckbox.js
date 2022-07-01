import { useState } from "react";
import { CheckBox } from "./checkbox";
import { Button } from "./button";

import classes from "./dropdownCheckbox.module.css";

export const DropdownCheckbox = ({ label, options, value, onChange }) => {
  const [visible, setVisible] = useState(false);

  const showList = (event) => {
    visible ? setVisible(false) : setVisible(true);
  };

  const catalog = options.map((item, index) => {
    return (
      <li key={index}>
        <CheckBox
          type="checkbox"
          id={item}
          text={item}
          name={label}
          onChange={onChange}
        />
      </li>
    );
  });

  return (
    <div className={classes.dropdownCheckList}>
      {label}
      <span className={classes.anchor} onClick={showList}>
        {value}
      </span>
      {visible ? (
        <>
          <ul className={classes.items}>
            {catalog}
            <Button text={"Apply"} />
          </ul>
        </>
      ) : null}
    </div>
  );
};
