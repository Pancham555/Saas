import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
  value: string;
}
const initialState: State = {
  value: "",
};

export const Slice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    change: (state: State, action: PayloadAction<State>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = Slice.actions;

export default Slice.reducer;
