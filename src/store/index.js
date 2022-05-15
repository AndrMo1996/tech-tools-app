import { configureStore } from "@reduxjs/toolkit";

import workhoursReducer from "./workhoursSlice";
import estimateReducer from "./estimateSlice";

export default configureStore({
  reducer: {
    workhours: workhoursReducer,
    estimate: estimateReducer
  },
});
