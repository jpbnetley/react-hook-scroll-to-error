import { string, object, number } from "yup";
const addSchema = object().shape({
  name: string().required(),
  surname: string().required(),
  age: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  1: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  2: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  3: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  4: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  5: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  6: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  7: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  8: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  9: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  10: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  11: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  12: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value))
});

export default addSchema;
