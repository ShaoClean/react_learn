import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Img from "./Img";
// import {add,decrement,customAdd} from '../store/features/counterSlice'
function Count(props: any) {
	const { text } = props;
	// const [myText, setMyText] = useState(text);
	const [count, setCount] = useState(0);
	const divRef = useRef(null);

	console.log("count div ref:", divRef.current);

	// const memoText = useMemo(() => {
	// 	console.log("memoText change", myText);
	// 	const copyMyText = myText;
	// 	return copyMyText;
	// }, [myText]);

	useEffect(() => {
		console.log("count div ref effect:", divRef.current);

		// console.log("myText change", myText);
	}, [count]);

	return (
		<div ref={divRef}>
			<div style={{ border: "1px solid blue" }}>
				<h1>count：{count}</h1>
				<button onClick={() => setCount(count + 1)}>
					Click To Add
				</button>
				{/* <div>{myText}</div>
				<button onClick={() => setMyText(myText + "1")}>
					Click To Change
				</button> */}
			</div>

			{/* <Img text={memoText} /> */}
		</div>
	);
}

export default Count;
