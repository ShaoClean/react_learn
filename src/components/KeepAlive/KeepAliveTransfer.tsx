import { FC, useContext, useEffect, useRef } from "react";
import { keepAliveContext } from "./KeepAliveContext";

export default function KeepAliveTransfer(
	KeepAliveComponet: FC,
	keepAliveId: string
) {
	return function (props: any) {
		const ref = useRef<any>(null);
		const { keepAliveStatus, setKeepAliveState } =
			useContext(keepAliveContext);

		useEffect(() => {
			const state = keepAliveStatus[keepAliveId];

			if (state && state.nodes) {
				state.nodes.forEach((node: Node) =>
					ref.current!.appendChild(node)
				);
			} else {
				setKeepAliveState({
					keepAliveId,
					reactElement: <KeepAliveComponet {...props} />,
				});
			}
		}, [keepAliveStatus, setKeepAliveState, props]);
		return <div ref={ref}></div>;
	};
}
