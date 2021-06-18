import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const TextInput = ({ name = "", label = "", placeholder, required }) => {
  const { register, errors } = useFormContext();

  return (
    <div className="inputGroup">
      <div className="withError">
        <label htmlFor={name}>{label}</label>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <label className="error">{message}</label>}
        />
      </div>
      <input
        type="text"
        name={name}
        ref={register}
        autoComplete="off"
        placeholder={placeholder || label}
        required={required}
      />
    </div>
  );
};

export default TextInput;
