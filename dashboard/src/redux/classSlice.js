import {createSlice} from '@reduxjs/toolkit';

const classSlice = createSlice({
    name: 'class',
    initialState: {
        classes: [],
        selectedClass: null,
    },
    reducers: {
        setClasses: (state, action) => {
            state.classes = action.payload;
        },
        setSelectedClass: (state, action) => {
            state.selectedClass = action.payload;
        },
    },
});
export const { setClasses, setSelectedClass } = classSlice.actions;
export default classSlice.reducer;