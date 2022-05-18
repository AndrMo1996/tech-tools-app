import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  EntityTypes,
  STATUS_COMPLETED,
  STATUS_FAILED,
  STATUS_NOT_STARTED,
} from "../config/data/EstimatorData";
import { getEntities } from "../api/trujay/TrujayAPI";

export const getSubtaskEntities = createAsyncThunk(
  "subtasks/getSubtaskEntities",
  async function (appKey, { rejectWithValue, dispatch, getState }) {
    try {
      let entities;

      for (const entityType of getState().subtasks.entityTypes) {
        if (entityType.isSelected) {
          dispatch(setStatus(`Fetching ${entityType.title} entities`));
          let page = 1;

          do {
            entities = await getEntities(appKey, page, entityType.id);

            for (const entity of entities) {
              dispatch(addEntity(entity));
            }
            page++;
          } while (entities.length !== 0);
        }
      }
      return [];
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const subtasksSlice = createSlice({
  name: "subtasks",
  initialState: {
    entities: [],
    entityTypes: EntityTypes,
    status: STATUS_NOT_STARTED,
    error: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    toggleEntityTypeSelected(state, action) {
      console.log(action);
      const toggledRecord = state.entityTypes.find(
        (type) => type.id === action.payload
      );
      toggledRecord.isSelected = !toggledRecord.isSelected;
    },
    toggleEntitySelected(state, action) {
      const toggledRecord = state.entities.find(
        (type) => type.id === action.payload
      );
      toggledRecord.isSelected = !toggledRecord.isSelected;
    },
    addEntity(state, action) {
      state.entities.push({
        ...action.payload,
        isSelected: true,
      });
    },
    clearEntities(state, action) {
      state.entities = [];
    },
  },
  extraReducers: {
    [getSubtaskEntities.fulfilled]: (state, action) => {
      state.status = STATUS_COMPLETED;
    },
    [getSubtaskEntities.rejected]: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload;
    },
  },
});

export const { setStatus, addEntity, toggleEntitySelected, toggleEntityTypeSelected, clearEntities } = subtasksSlice.actions;

export default subtasksSlice.reducer;