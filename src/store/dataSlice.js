import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  BASE_URL,
  PORT,
  PROXY,
} from "../utils/config";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(PROXY + BASE_URL + PORT);
      if (!response.ok) {
        throw new Error("SERVER ERROR!");
      }
      const dataList = await response.json();
      return dataList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: null,
    filteredList: [],
    statisticData: null,
    status: null,
    error: null,
  },
  reducers: {
    setDataList(state, action) {
      state.dataList = action.payload;
      localStorage.setItem("dataList", JSON.stringify(action.payload));
    },
    setFilteredList(state, action) {
      state.filteredList = state.dataList.filter(
        (arr) => arr[0] === action.payload
      );
    },
    resetFilteredList(state, action) {
      state.filteredList = [];
    },
    setStatisticData(state, action) {
      state.statisticData = state.dataList.filter(
        (arr) => String(arr[4]) === action.payload
      );
    },
    resetStatisticData(state, action) {
      state.statisticData = null;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cards = action.payload;
    },
    [fetchData.rejected]: setError,
  },
});

export const {
  setDataList,
  setFilteredList,
  resetFilteredList,
  setStatisticData,
  resetStatisticData,
} = dataSlice.actions;

export default dataSlice.reducer;
