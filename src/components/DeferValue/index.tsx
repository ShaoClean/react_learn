import {memo, useDeferredValue, useEffect, useMemo, useState, useTransition} from "react";

const numbers = [...new Array(600).keys()];


export default function DeferValue() {
	const [query, setQuery] = useState("");
	const deferQuery = useDeferredValue(query)

	console.log('Component Render')
	const handleChange = (e:any) => {
		setQuery((prevState)=>{
			// console.log('setQuery1 prevState', prevState)
			return e.target.value
		});

		// setQuery((prevState)=>{
		// 	console.log('setQuery2 prevState', prevState)
		// 	return e.target.value + 2
		// });
		//
		// setQuery((prevState)=>{
		// 	console.log('setQuery3 prevState', prevState)
		// 	return e.target.value + 3
		// });
	};

	// useEffect(()=>{
	// 	console.log('defer query 变化了', deferQuery)
	// }, [deferQuery])
	//
	//
	// useEffect(()=>{
	// 	console.log('query 变化了', query)
	// },[query])

	// 直接渲染，在过滤的过程中会有很明显的卡顿
	return (
		<div>
			<input type="number" onChange={handleChange}/>
			<div>
				{
					<SlowList text={deferQuery}/>
				}
			</div>
		</div>
	);
}


const SlowList = memo(function ({text}:any){
	console.log('slow list : ', text)
	const items = []
	for (let i = 0; i < 2500; i++) {
		items.push(<SlowItem key={i} text={text} />);
	}
	return (
		<div>
			{
				items
			}
		</div>
	)
})

function SlowItem({text}:any){
	let startTime = performance.now();
	while (performance.now() - startTime < 1) {
		// Do nothing for 1 ms per item to emulate extremely slow code
	}

	return (
		<div>
			{text}
		</div>
	)
}


