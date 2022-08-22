import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./Reducers";
import { UserSagas } from "./Users/user.saga";



const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(UserSagas);