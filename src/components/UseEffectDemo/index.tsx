import { useEffect, useState } from "react";

const UseEffectDemo = () => {
	const [count, setCount] = useState(0);
	const [otherState, setOtherState] = useState("ababab");
	console.log("render count:", count);

	useEffect(() => {
		/**
		 * 副作用函数执行时机：
		 * 1.组件渲染完成后执行一次（这一条规则只会触发一次）
		 * 2.依赖状态发生变化时执行
		 *     a.没有传第二个参数时，相当于依赖了所有状态，每次重新渲染的时候都会执行
		 *     b.第二个参数为空数组时，只会在组件卸载时触发
		 */
		console.log("useEffect count", count);
		/**
		 * 清除函数执行的时机：
		 * 1.下一次渲染完组件，执行副作用之前
		 * 2.组件卸载时
		 */
		return () => {
			console.log("useEffect after count", count);
		};
	});

	useEffect(() => {
		console.log("useEffect2 count", count);

		return () => {
			console.log("useEffect2 after count", count);
		};
	}, []);

	useEffect(() => {
		console.log("useEffect3 count", count);
		return () => {
			console.log("useEffect3 after count", count);
		};
	}, [count]);

	useEffect(() => {
		console.log("otherState count", count);
		return () => {
			console.log("otherState after count", count);
		};
	}, [otherState]);

	return (
		<>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				add
			</button>
		</>
	);
};

export default UseEffectDemo;
