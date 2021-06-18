import "./styles.css";
import Form from "./coponents/Form";
import TextInput from "./coponents/TextInput";
import NumberInput from "./coponents/NumberInput";
import addSchema from "./coponents/schemas/add-schema";

export default function App() {
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Form validationSchema={addSchema} onSubmit={onSubmit}>
        <TextInput name="name" label="Name" required />
        <TextInput name="middleName" label="Middle name" />
        <TextInput name="surname" label="Surname" required />
        <NumberInput name="age" label="Age" required />
        <NumberInput name="age1" label="1" required />
        <NumberInput name="age2" label="2" required />
        <NumberInput name="age3" label="3" required />
        <NumberInput name="age4" label="4" required />
        <NumberInput name="age5" label="5" required />
        <NumberInput name="age6" label="6" required />
        <NumberInput name="age7" label="7" required />
        <NumberInput name="age8" label="8" required />
        <NumberInput name="age9" label="9" required />
        <NumberInput name="age10" label="10" required />
        <NumberInput name="age11" label="11" required />
        <NumberInput name="age12" label="12" required />
      </Form>
    </>
  );
}
