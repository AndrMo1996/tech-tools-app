import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatDate } from "../helper/helpers";

export const fetchWorkHours = createAsyncThunk(
  "workhours/fetchWorkHours",
  async function (params, { rejectWithValue }) {
    try {
      const url = `${
        process.env.REACT_APP_BASE_API_URL
      }jira/workhours?fromDate=${formatDate(params.fromDate)}&toDate=${formatDate(
        params.toDate
      )}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Server error. Can't get workhours");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const workhoursSlice = createSlice({
  name: "workhours",
  initialState: {
    workhours: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchWorkHours.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchWorkHours.fulfilled]: (state, action) => {
      state.status = "completed";
      state.workhours = action.payload;
    },
    [fetchWorkHours.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default workhoursSlice.reducer;
