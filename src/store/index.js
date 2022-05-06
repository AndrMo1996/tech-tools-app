import { configureStore } from "@reduxjs/toolkit";

import workhoursReducer from "./workhoursSlice";

export default configureStore({
  reducer: {
    workhours: workhoursReducer,
  },
});
