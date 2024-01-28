import { useCallback, useReducer } from "react";
import keepAliveReducer from "./KeepAliveReducer";
import { keepAliveContext } from "./KeepAliveContext";
import { CREATED, CREATEING } from "./actionTypes";
export default function KeepAlive(props: any) {
	const [keepAliveStatus, dispatch] = useReducer(keepAliveReducer, {});

	const setKeepAliveState = useCallback(
		({ reactElement, keepAliveId }: any) => {
			if (!keepAliveStatus[keepAliveId]) {
				dispatch({
					type: CREATEING,
					payload: {
						keepAliveId,
						reactElement,
					},
				});
			}
		},
		[keepAliveStatus]
	);

	return (
		<keepAliveContext.Provider
			value={{ keepAliveStatus, setKeepAliveState, dispatch }}>
			{props.children}
			{Object.values(keepAliveStatus).map(
				({ keepAliveId, reactElement }: any) => (
					<div
						key={keepAliveId}
						ref={node => {
							if (node && !keepAliveStatus[keepAliveId].nodes) {
								dispatch({
									type: CREATED,
									payload: {
										keepAliveId,
										nodes: [...node.childNodes],
									},
								});
							}
						}}>
						{reactElement}
					</div>
				)
			)}
		</keepAliveContext.Provider>
	);
}
