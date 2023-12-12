import * as echarts from "echarts";
import { useEffect, useRef } from "react";

type EChartsOption = echarts.EChartsOption;

export default function EchartComponent1() {
	const chartDomRef = useRef<HTMLDivElement>(null);
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

	useEffect(() => {
		const myChart = echarts.init(chartDomRef.current);
		option && myChart.setOption(option);
	}, []);

	return (
		<>
			<div ref={chartDomRef} style={domStyle}></div>
		</>
	);
}
