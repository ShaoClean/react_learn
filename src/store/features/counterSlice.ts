import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		countInfo: {
			value: '[[1,1]]'
		},
	},
	reducers: {
		setValue(state) {
			const valueObj = JSON.parse(state.countInfo.value)
			valueObj.push([9,9])
			state.countInfo = {
				value:JSON.stringify(valueObj)
			} 
		},
	},
});

export const {setValue} = counterSlice.actions
export default counterSlice.reducer;
