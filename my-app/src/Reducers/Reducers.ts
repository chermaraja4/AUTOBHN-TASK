import { combineReducers } from "redux";
import { UserReducer } from "./Users/user.reducer";


export const rootReducer = combineReducers({
    User: UserReducer,

});

export type reducerState = ReturnType<typeof rootReducer>;