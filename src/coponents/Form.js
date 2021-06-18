import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object } from "yup";

const Form = (props) => {
  const { validationSchema = object({}) } = props;

  const methods = useForm({
    resolver: yupResolver(validationSchema)
  });

  const { handleSubmit, errors } = methods;

  console.error(errors);

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="layout">
          {props.children}
          <div className="control">
            <button onClick={handleSubmit(onSubmit)}> Submit </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
