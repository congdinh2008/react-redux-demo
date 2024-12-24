import { combineReducers } from "@reduxjs/toolkit";
import reducer from "../features/auth/auth-slice";

const rootReducer = combineReducers({
    auth: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;