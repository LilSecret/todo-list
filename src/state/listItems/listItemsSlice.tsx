import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TListItem } from "../../types";
import toast from "react-hot-toast";

type TListItems = {
  value: TListItem[];
};

const initialState: TListItems = {
  value: [],
};

export const listItemsSlice = createSlice({
  name: "list-items",
  initialState,
  reducers: {
    deleteListItem: (state, action: PayloadAction<TListItem>) => {
      state.value = state.value.filter(
        (task) => task.title !== action.payload.title
      );
      toast.success("List item was deleted");
    },
    addListItem: (state, action: PayloadAction<TListItem>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { deleteListItem, addListItem } = listItemsSlice.actions;
export default listItemsSlice.reducer;
