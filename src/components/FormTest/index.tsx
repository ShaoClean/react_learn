import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormTest = () => {
	const [fields, setFields] = useState([
		{ name: ["username"], value: "Ant Design" },
	]);

	const navigate = useNavigate();
	return (
		<Form name="global_state" layout="inline" fields={fields}>
			<Button
				onClick={() => {
					navigate("/");
				}}>
				jump
			</Button>
			<Form.Item
				name="username"
				label="Username"
				rules={[{ required: true, message: "Username is required!" }]}>
				<Input />
			</Form.Item>
		</Form>
	);
};

export default FormTest;
