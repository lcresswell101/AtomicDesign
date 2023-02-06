import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks";

export default configureStore({
    reducer: {
        tasks: tasksSlice
    },
});