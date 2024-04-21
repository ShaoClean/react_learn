import { ReactElement, useReducer } from "react";
import { MyKeepAliveContext } from "./context";

export const CREATED = "created";
export const CREATING = "creating";
type status = "created" | "creating";

type SB = { id: string; vnode: ReactElement; nodes: Node[] | null };

type Actions = {
	type: status;
	payload: SB;
};

const MyAliveScopeReducer = (
	preValue: Record<string, SB>,
	actions: Actions
): Record<string, SB> => {
	const {
		type,
		payload: { id, vnode, nodes },
	} = actions;

	switch (type) {
		case "created":
			return {
				...preValue,
				[id]: {
					id,
					vnode,
					nodes,
				},
			};
		case "creating":
			return {
				...preValue,
				[id]: { ...preValue[id], id, vnode, nodes: null },
			};
		default:
			return preValue;
	}
};

const MyAliveScope = (props: { children: any }) => {
	const [aliveInfo, dispatch] = useReducer(MyAliveScopeReducer, {});

	const setAliveInfo = ({
		id,
		vnode,
	}: {
		id: string;
		vnode: ReactElement;
	}) => {
		if (!aliveInfo[id]) {
			dispatch({
				type: "creating",
				payload: {
					id,
					vnode,
					nodes: null,
				},
			});
		}
	};

	return (
		<MyKeepAliveContext.Provider
			value={{ aliveInfo, setAliveInfo, dispatch }}>
			{props.children}
			{Object.values(aliveInfo).map(({ id, vnode }) => (
				<div
					key={id}
					ref={node => {
						if (node && aliveInfo[id] && !aliveInfo[id].nodes) {
							dispatch({
								type: "created",
								payload: {
									id,
									vnode,
									nodes: [...node!.childNodes],
								},
							});
						}
					}}>
					{vnode}
				</div>
			))}
		</MyKeepAliveContext.Provider>
	);
};

export default MyAliveScope;
