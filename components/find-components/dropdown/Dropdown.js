import React from "react";
import styles from "./Dropdown.module.css";
import { useTheme } from "next-themes";

const Dropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };
  const { theme, setTheme } = useTheme();

  return (
    <div className="col-sm-6 form-group row px-0">
      <label className="form-label col-sm-2">{props.label}</label>
      <select
        value={props.selectedValue}
        onChange={dropdownChanged}
        className={styles.dropdown}
      >
        <option key={0}>Select...</option>
        {props.options.map((item, idx) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
