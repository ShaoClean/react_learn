import { useReducer, useRef } from "react";
import Button from "antd/es/button";
import { Modal } from "antd";
function reducer(state: any, action: any) {
	console.log(state, action);
	if (action === "incremented_age") {
		return {
			age: state.age + 1,
			name: "clean",
		};
	}
	throw Error("Unknown action");
}

const modalInitalValue = { one: false, two: false, three: false };
const modalReducer = (state: any, action: any) => {
	switch (action.type) {
		case "one":
			return {
				...state,
				one: action.state,
			};
		default:
			return modalInitalValue;
	}
};

export function ReducerDemo() {
	const [state, dispatch] = useReducer(reducer, { age: 42, name: "" });

	const [modalStatus, modalDispatch] = useReducer(
		modalReducer,
		modalInitalValue
	);

	return (
		<div>
			{/* <Button type="primary" onClick={() => dispatch("incremented_age")}>
				increment age
			</Button>
			<Button type="primary" onClick={() => dispatch("abababab")}>
				other button
			</Button>
			<p>hello you are {state.age} old</p>
			<p>hello you are {state.name}</p> */}

			<Button
				type="primary"
				onClick={() => modalDispatch({ type: "one", state: true })}>
				open modal one
			</Button>
			<Modal
				title="Basic Modal"
				open={modalStatus.one}
				onOk={() => {
					modalDispatch({ type: "one", state: false });
				}}
				onCancel={() => {
					modalDispatch({ type: "one", state: false });
				}}>
				<p>modal one</p>
			</Modal>
		</div>
	);
}
