import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TListItem } from "../../types";
import toast from "react-hot-toast";

type TListItems = {
  value: TListItem[];
};

const getInitialValue = (): TListItems => {
  const cachedData = localStorage.getItem("list-items");

  if (cachedData) {
    return { value: JSON.parse(cachedData) };
  }

  localStorage.setItem("list-items", JSON.stringify([]));
  return { value: [] };
};

export const listItemsSlice = createSlice({
  name: "list-items",
  initialState: getInitialValue(),
  reducers: {
    deleteListItem: (state, action: PayloadAction<TListItem>) => {
      state.value = state.value.filter(
        (task) => task.title !== action.payload.title
      );
      toast.success("List item was deleted");
      localStorage.setItem("list-items", JSON.stringify(state.value));
    },
    addListItem: (state, action: PayloadAction<TListItem>) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem("list-items", JSON.stringify(state.value));
    },
  },
});

export const { deleteListItem, addListItem } = listItemsSlice.actions;
export default listItemsSlice.reducer;
