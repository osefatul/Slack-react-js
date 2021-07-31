import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  //So what are the actions for redux we want to deploy. when we click on the channel we need to enter the room. how we do that? we basically get the channel id and push it to the store.
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectRoomId = (state) => state.app.roomId; // this app refers to the name

export default appSlice.reducer;
