import { string, object, number } from "yup";
const addSchema = object().shape({
  name: string().required(),
  surname: string().required(),
  age: number().required().nullable(),
  1: number().required().nullable(),
  2: number().required().nullable(),
  3: number().required().nullable(),
  4: number().required().nullable(),
  5: number().required().nullable(),
  6: number().required().nullable(),
  7: number().required().nullable(),
  8: number().required().nullable()
});

export default addSchema;
