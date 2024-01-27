import "./App.css";
import NbCanvas from "./components/NbCanvas";
import EchartDemo from "./demo/echarts";
import FormTest from "./components/FormTest";
import MyTreeModel from "tree-model";
import WsDemo from "./demo/ws";
import UseEffectDemo from "./components/UseEffectDemo";
import { useState } from "react";
function App() {
	const [show, setShow] = useState(true);
	return (
		<>
			<button
				onClick={() => {
					setShow(!show);
				}}>
				show
			</button>

			{show && <UseEffectDemo />}
		</>
	);
}

export default App;
