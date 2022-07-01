export const CheckBox = ({ id, text, type, name, onChange, checked }) => (
  <label htmlFor={id}>
    <input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      checked={checked}
    />
    {text}
  </label>
);
