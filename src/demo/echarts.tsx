import { Button } from "antd";
import * as echarts from "echarts";
import { useEffect, useRef, useState } from "react";
import EchartComponent1 from "./echart_component1";
import EchartComponent2 from "./echart_component2";
type EChartsOption = echarts.EChartsOption;

export default function EchartDemo() {
	const [showChart1, setShowChart1] = useState(true);
	const domStyle = {
		width: "1000px",
		height: "700px",
	};
	const option: EChartsOption = {
		xAxis: {
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: [820, 932, 901, 934, 1290, 1330, 1320],
				type: "line",
				smooth: true,
			},
		],
	};

	useEffect(() => {}, []);

	return (
		<>
			<div>
				<Button onClick={() => setShowChart1(!showChart1)}>
					toggle
				</Button>
			</div>
			{showChart1 ? <EchartComponent1 /> : <EchartComponent2 />}
		</>
	);
}
