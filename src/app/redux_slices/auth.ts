import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
  authenticated: boolean;
  id: string;
  given_name: string;
  family_name: string;
  email: string;
  phone_number: string | number | null;
  picture: string;
}

const initialState: State = {
  authenticated: true,
  email: "panchamb63@gmail.com",
  family_name: "Barman",
  given_name: "Pancham",
  id: "kp_e964fa68da49475c9957359f20c8e9ba",
  phone_number: null,
  picture:
    "https://lh3.googleusercontent.com/a/ACg8ocLict9Wj_w7ABqd6CY6OMd8rKwhet78y3iv2mR2Z5WnpH7Z6w=s96-c",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    change: (state: State, action: PayloadAction<State>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = counterSlice.actions;

export default counterSlice.reducer;
