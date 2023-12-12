import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Img from "./Img";
// import {add,decrement,customAdd} from '../store/features/counterSlice'
function Count(props: any) {
	const { text } = props;
	const [myText, setMyText] = useState(text);
	const [count, setCount] = useState(0);


    const memoText = useMemo(()=>{
		console.log('memoText change',myText);
        const copyMyText = myText
        return copyMyText
    },[myText])

	useEffect(() => {
		console.log('myText change',myText);
	},[myText])

	return (
		<div>
			<div style={{border:'1px solid blue'}}>
				<h1>count：{count}</h1>
				<button onClick={() => setCount(count + 1)}>
					Click To Add
				</button>
				<div>{myText}</div>
				<button onClick={() => setMyText(myText + "1")}>
					Click To Change
				</button>
			</div>

			<Img text={memoText} />
		</div>
	);
}

export default Count;
