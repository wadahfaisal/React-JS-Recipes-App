import { FormRowProps as Props } from "../types/porpsTypes";

const FormRow = ({ type, labelText, name }: Props) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      {type === "text-area" ? (
        <textarea name={name} id={name} className="form-textarea"></textarea>
      ) : (
        <input type={type} name={name} id={name} className="form-input" />
      )}
    </div>
  );
};

export default FormRow;
