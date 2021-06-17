import { string, object, number } from "yup";
const addSchema = object().shape({
  name: string().required(),
  surname: string().required(),
  age: number().required()
});

export default addSchema;
