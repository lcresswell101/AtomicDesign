import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TasksState {
    tasks: string[],
}

const initialState: TasksState = {
    tasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.tasks.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((value, index) => action.payload !== index);
        },
    }
})

export const { add, remove} = tasksSlice.actions;

export default tasksSlice.reducer;