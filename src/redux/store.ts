import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";

const logger = createLogger();
let middleware: Array<any> = [thunk];

let configStore: any = applyMiddleware(...middleware);

const composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
  configStore = composeEnhancers(applyMiddleware(...middleware));
}

const initialState: any = {};

const store = createStore(rootReducer, initialState, configStore);

export type RootStore = ReturnType<typeof rootReducer>;

export default store;
