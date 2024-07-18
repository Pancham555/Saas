import { configureStore } from "@reduxjs/toolkit";
import reducer from "./redux_slices/auth";
import inventoryDelete from "./redux_slices/inventoryDelete";
export const store = configureStore({
  reducer: { reducer, inventoryDelete },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
