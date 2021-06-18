import "./styles.css";
import Form from "./coponents/Form";
import TextInput from "./coponents/TextInput";
import NumberInput from "./coponents/NumberInput";
import addSchema from "./coponents/schemas/add-schema";

export default function App() {
  return (
    <>
      <Form validationSchema={addSchema}>
        <TextInput name="name" label="Name" required />
        <TextInput name="surname" label="Surname" required />
        <NumberInput name="age" label="Age" required />
        <NumberInput name="1" label="1" required />
        <NumberInput name="2" label="2" required />
        <NumberInput name="3" label="3" required />
        <NumberInput name="4" label="4" required />
        <NumberInput name="5" label="5" required />
        <NumberInput name="6" label="6" required />
        <NumberInput name="7" label="7" required />
        <NumberInput name="8" label="8" required />
        <NumberInput name="9" label="9" required />
        <NumberInput name="10" label="10" required />
        <NumberInput name="11" label="11" required />
        <NumberInput name="12" label="12" required />
      </Form>
    </>
  );
}
