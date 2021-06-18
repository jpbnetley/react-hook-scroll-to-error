import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const NumberInput = ({ name = "", label = "", placeholder }) => {
  const { register, errors } = useFormContext();

  return (
    <div className="inputGroup">
      <label htmlFor={name}>{label}</label>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <label className="error">{message}</label>}
      />
      <input
        type="number"
        name={name}
        ref={register}
        autoComplete="off"
        placeholder={placeholder || label}
      />
    </div>
  );
};

export default NumberInput;
