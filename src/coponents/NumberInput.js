import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const NumberInput = ({ name = "", label = "", placeholder }) => {
  const { register, errors } = useFormContext();
  console.log(name);

  console.error(errors);

  return (
    <div className="inputGroup">
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <label>{message}</label>}
      />
      <label htmlFor={name}>{label}</label>
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
