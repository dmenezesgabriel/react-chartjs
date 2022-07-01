import { useState } from "react";
import { CheckBox } from "./checkbox";
import classes from "./dropdownCheckbox.module.css";

export const DropdownCheckbox = ({ label, options, value, onChange }) => {
  const [visible, setVisible] = useState(false);
  const showList = (event) => {
    visible ? setVisible(false) : setVisible(true);
  };

  return (
    <div className={classes.dropdownCheckList}>
      <span className={classes.anchor} onClick={showList}>
        {value}
      </span>
      {
        <ul className={classes.items}>
          {options.map((item, index) => {
            if (visible) {
              return (
                <li key={index}>
                  <CheckBox id={item} text={item} />
                </li>
              );
            }
          })}
        </ul>
      }
    </div>
  );
};
