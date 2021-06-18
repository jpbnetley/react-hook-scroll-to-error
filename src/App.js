import "./styles.css";
import Form from "./coponents/Form";
import TextInput from "./coponents/TextInput";
import NumberInput from "./coponents/NumberInput";
import addSchema from "./coponents/schemas/add-schema";

export default function App() {
  return (
    <>
      <Form validationSchema={addSchema}>
        <TextInput name="name" label="Name" />
        <TextInput name="surname" label="Surname" />
        <NumberInput name="age" label="Age" />
        <NumberInput name="1" label="1" />
        <NumberInput name="2" label="2" />
        <NumberInput name="3" label="3" />
        <NumberInput name="4" label="4" />
        <NumberInput name="5" label="5" />
        <NumberInput name="6" label="6" />
        <NumberInput name="7" label="7" />
        <NumberInput name="8" label="8" />
        <NumberInput name="9" label="9" />
        <NumberInput name="10" label="10" />
      </Form>
    </>
  );
}
