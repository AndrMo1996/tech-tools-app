import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  EntityTypes,
  STATUS_COMPLETED,
  STATUS_FAILED,
  STATUS_NOT_STARTED,
} from "../config/data/EstimatorData";
import {
  getEntities,
  getEntityCount,
  getEntityCustomFields,
} from "../api/trujay/TrujayAPI";

export const getEstimate = createAsyncThunk(
  "estimate/getEstimate",
  async function (appKey, { rejectWithValue, dispatch, getState }) {
    try {
      let entities;

      for (const type of EntityTypes) {
        dispatch(setStatus(`Fetching ${type.title} entities`));
        let page = 1;

        do {
          entities = await getEntities(appKey, page, type.id);

          for (const entity of entities) {
            dispatch(setStatus(`Count ${entity.entity}`));

            const count = await getEntityCount(appKey, entity.id);
            if (count.total > 0) {
              const customFields = await getEntityCustomFields(
                appKey,
                entity.id
              );
              dispatch(
                setEstimate(
                  {
                    entityType: type.title,
                    title: entity.entity,
                    total: count.total,
                    customFields: customFields,
                  }
                )
              );
            }
          }
          page++;
        } while (entities.length !== 0);
      }
      return [];
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const estimateSlice = createSlice({
  name: "estimate",
  initialState: {
    estimate: [],
    status: STATUS_NOT_STARTED,
    error: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setEstimate(state, action) {
      console.log(action.payload)
      state.estimate.push(action.payload);
    },
    clearEstimate(state, action) {
      state.estimate = [];
    },
  },
  extraReducers: {
    [getEstimate.fulfilled]: (state, action) => {
      state.status = STATUS_COMPLETED;
    },
    [getEstimate.rejected]: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload;
    },
  },
});

export const { setStatus, setEstimate, clearEstimate } = estimateSlice.actions;

export default estimateSlice.reducer;
