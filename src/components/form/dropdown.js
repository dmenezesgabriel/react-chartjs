import { Option } from "./option";

export const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((item, index) => {
            return <Option key={index} value={item} text={item} />;
          })}
        </select>
      </label>
    </div>
  );
};
