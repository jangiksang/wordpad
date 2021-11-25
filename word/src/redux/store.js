import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk"

// Modules
import card from "./modules/card";


const middlewears = [thunk];
const rootReducer = combineReducers({ card });
const enhancer = applyMiddleware(...middlewears)

const store = createStore(rootReducer, enhancer);

export default store;