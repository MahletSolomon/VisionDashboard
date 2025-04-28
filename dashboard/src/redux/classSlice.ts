import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the state
interface ClassState {
  classes: string[]; // Array of class names
  selectedClass: string | null; // Selected class or null
}

// Define the initial state
const initialState: ClassState = {
  classes: [],
  selectedClass: null,
};

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    setClasses: (state, action: PayloadAction<string[]>) => {
      state.classes = action.payload;
    },
    setSelectedClass: (state, action: PayloadAction<string | null>) => {
      state.selectedClass = action.payload;
    },
  },
});

export const { setClasses, setSelectedClass } = classSlice.actions;
export default classSlice.reducer;