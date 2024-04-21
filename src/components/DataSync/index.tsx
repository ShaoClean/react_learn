import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, {
	setGlobalCount,
	setMunalGlobalCount,
} from "../../store/features/counterSlice";
import { RootState, persistor, store } from "../../store";

const DataSync = () => {
	const dispatch = useDispatch();
	const [randomValue, setRandomValue] = useState(Math.random());
	const globalCount = useSelector((state: RootState) => state.golbalCount);

	const countRef = useRef<number>(0);

	useEffect(() => {
		// @ts-ignore
		window.addEventListener("storage", e => {
			console.log("window storage change", e);
			// @ts-ignore
			const storageJson = e.storageArea["persist:root"];
			const jsonValue = JSON.parse(storageJson);
			countRef.current = jsonValue.golbalCount;

			console.log("countRef.current:", countRef.current);
		});
	}, []);
	return (
		<>
			<h1>randomValue:{randomValue}</h1>
			<h1>globalCount:{globalCount}</h1>
			<Button
				onClick={async () => {
					dispatch(setGlobalCount());
				}}>
				increase golbalcount
			</Button>
			<Button
				onClick={async () => {
					dispatch(
						setMunalGlobalCount({ munalCount: countRef.current })
					);
				}}>
				increase munal golbalcount
			</Button>
			<Button
				onClick={() => {
					window.open("http://localhost:5173/", "target");
				}}>
				open tab
			</Button>
		</>
	);
};

export default DataSync;
