export const CheckBox = ({ id, text }) => (
  <label htmlFor={id}>
    <input type="checkbox" id={id} />
    {text}
  </label>
);
