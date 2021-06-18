import { string, object, number } from "yup";
const addSchema = object().shape({
  name: string().required(),
  surname: string().required(),
  middleName: string().optional(),
  age: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age1: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age2: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age3: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age4: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age5: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age6: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age7: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age8: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age9: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age10: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age11: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  age12: number()
    .required()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value))
});

export default addSchema;
