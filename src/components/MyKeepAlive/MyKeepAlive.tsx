import { Fragment, useContext, useEffect, useRef } from "react";
import { MyKeepAliveContext } from "./context";

const MyKeepAlive = (props: { id: string; children: any }) => {
	const divRef = useRef<HTMLDivElement>(null);
	const { aliveInfo, setAliveInfo } = useContext(MyKeepAliveContext);

	useEffect(() => {
		const currentInfo = aliveInfo[props.id];
		if (currentInfo && currentInfo.nodes) {
			currentInfo.nodes.forEach((node: HTMLElement) => {
				divRef.current!.appendChild(node);
			});
		} else {
			setAliveInfo({ id: props.id, vnode: props.children });
		}
	}, [aliveInfo, setAliveInfo]);
	return <div ref={divRef}></div>;
};

export default MyKeepAlive;
