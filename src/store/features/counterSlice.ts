import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		golbalCount: 1,
	},
	reducers: {
		setGlobalCount(state) {
			state.golbalCount += 1;
		},
		setMunalGlobalCount(
			state,
			action: PayloadAction<{ munalCount: number }>
		) {
			state.golbalCount = action.payload.munalCount + 1;
		},
	},
});

export const { setGlobalCount, setMunalGlobalCount } = counterSlice.actions;
export default counterSlice.reducer;
