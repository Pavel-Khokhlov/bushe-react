import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    noData: true,
    dataList: [],
    filteredList: [],
    statisticData: null,
    status: null,
    error: null,
  },
  reducers: {
    setNoData(state, action) {
      state.noData = action.payload;
    },
    setDataList(state, action) {
      state.dataList = action.payload;
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
});

export const {
  setNoData,
  setDataList,
  setFilteredList,
  resetFilteredList,
  setStatisticData,
  resetStatisticData,
} = dataSlice.actions;

export default dataSlice.reducer;
