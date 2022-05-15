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
        dispatch(setStatus(`Fetching ${type} entities`));
        dispatch(setEstimate(`${type} entities\n\n`));
        let page = 1;

        do {
          entities = await getEntities(appKey, page, type);

          for (const entity of entities) {
            dispatch(setStatus(`Count ${entity.entity}`));
            const count = await getEntityCount(appKey, entity.id);
            dispatch(setEstimate(`${entity.entity} - ${count}\n`));

            const customFields = await getEntityCustomFields(appKey, entity.id);
            if (customFields.count !== 0) {
              dispatch(setEstimate(`  Custom fields - ${customFields.count}\n`));
              for (const field of customFields.fields) {
                dispatch(setEstimate(`    ${field.title}\n`));
              }
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
    estimate: "",
    status: STATUS_NOT_STARTED,
    error: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setEstimate(state, action) {
      state.estimate = state.estimate.concat(action.payload);
    },
    clearEstimate(state, action) {
      state.estimate = '';
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
