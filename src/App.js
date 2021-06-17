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
      </Form>
    </>
  );
}
