import { ReactElement } from "react";
import { CREATED, CREATEING } from "./actionTypes";
type comStatus = "CREATEING" | "CREATED";
type KeepAliveReducerType = {
	state: any;
	action: {
		type: comStatus;
		payload: {
			keepAliveId: string;
			reactElement?: ReactElement;
			nodes?: Node[];
			status?: comStatus;
		};
	};
};
export default function keepAliveReducer(
	state: KeepAliveReducerType["state"],
	action: KeepAliveReducerType["action"]
) {
	const {
		type,
		payload: { keepAliveId, reactElement, nodes, status },
	} = action;

	switch (type) {
		case CREATEING:
			return {
				...state,
				[keepAliveId]: {
					keepAliveId,
					reactElement,
					status: type,
					nodes: null,
				},
			};
		case CREATED:
			return {
				...state,
				[keepAliveId]: {
					...state[keepAliveId],
					status: type,
					nodes,
				},
			};
		default:
			return state;
	}
}
