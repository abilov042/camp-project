import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { createStore } from "redux";

export function configureStore() {
    return createStore(rootReducer, devToolsEnhancer())
}