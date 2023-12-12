import { Form, Input } from "antd";
import { useState } from "react";

const FormTest = () => {
  const [fields, setFields] = useState([
    { name: ["username"], value: "Ant Design" },
  ]);
  const onChange = (fields: any) => {};
  return (
    <Form
      name="global_state"
      layout="inline"
      fields={fields}
      onFieldsChange={(_, allFields) => {
        onChange(allFields);
      }}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Username is required!" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormTest;
