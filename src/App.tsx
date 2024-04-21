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
import Test from "./components/MyKeepAlive/Test";
import { useRoutes } from "react-router-dom";
import { routes } from "./router";
const TestKeepAlive = KeepAliveTransfer(UseEffectDemo, "UseEffectDemo");
function App() {
	const [show, setShow] = useState(true);

	return (
		<>
			{/* <Test /> */}
			{useRoutes(routes)}
		</>
	);
}

export default App;
