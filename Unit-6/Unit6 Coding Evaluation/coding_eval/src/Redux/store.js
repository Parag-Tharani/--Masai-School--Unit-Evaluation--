import { legacy_createStore as createStore } from "redux";
import { AuthReducer } from "./Auth/reducer";

export const store = createStore(AuthReducer);