import { useEffect, useRef } from "react";
import style from "./nb_canvas.module.css";
export default function NbCanvas() {
	const canvasDom = useRef<any>(null);
	let points: any[] = [[0, 0], []];
	let timer: any;

	const clickFn = (e: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			let x = e.offsetX,
				y = e.offsetY;
			const index = points.findIndex(
				item => Math.abs(item[0] - x) < 10 && Math.abs(item[1] - y) < 10
			);
			if (index > 0) {
				console.error("请连接起点");
				return;
			}
			if (index === 0) {
				x = points[0][0];
				y = points[0][1];
			}
			const ctx = canvasDom.current!.getContext("2d");
			ctx.fillStyle = "rgba(24, 144, 255, 1)";
			ctx.fillRect(x - 3, y - 3, 6, 6);
			let prevPoint;
			if ((prevPoint = points[points.length - 1])) {
				ctx.strokeStyle = "rgba(24, 144, 255, 1)";
				ctx.beginPath();
				ctx.moveTo(prevPoint[0], prevPoint[1]);
				ctx.lineTo(x, y);
				ctx.stroke();
				ctx.closePath();
			}
			points.push([x, y]);
		}, 200);
	}; // 单击绘制坐标点及连线

	useEffect(() => {
		if (canvasDom.current) {
			// 给标注图层绑定点击事件
			canvasDom.current.addEventListener("click", clickFn);
		}
	}, [canvasDom.current]);
	return (
		<>
			<canvas
				ref={canvasDom}
				className={style.nb_canvas}
				width={1200}
				height={800}></canvas>
		</>
	);
}
