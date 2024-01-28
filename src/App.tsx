import "./App.css";
import NbCanvas from "./components/NbCanvas";
import EchartDemo from "./demo/echarts";
import FormTest from "./components/FormTest";
import MyTreeModel from "tree-model";
import WsDemo from "./demo/ws";
import UseEffectDemo from "./components/UseEffectDemo";
import { useState } from "react";
import KeepAlive from "./components/KeepAlive/KeepAlive";
import KeepAliveTransfer from "./components/KeepAlive/KeepAliveTransfer";
const TestKeepAlive = KeepAliveTransfer(UseEffectDemo, "UseEffectDemo");
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
			<KeepAlive>{show ? <TestKeepAlive /> : <>111</>}</KeepAlive>
		</>
	);
}

export default App;
