import { useState } from "react";
import Count from "../Count";
import { MyAliveScope, MyKeepAlive } from "./index";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Test() {
	const [show, setShow] = useState(true);
	const navigate = useNavigate();
	console.log("render");

	return (
		<>
			<Button
				onClick={() => {
					setShow(!show);
				}}>
				toggle show
			</Button>
			<Button
				onClick={() => {
					navigate("/form");
				}}>
				jump
			</Button>
			{show ? (
				<MyKeepAlive id="countTest">
					<Count />
				</MyKeepAlive>
			) : null}
		</>
	);
}
