import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import { createLogger } from "redux-logger";

import { root } from "../sagas";

import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware))
);

sagaMiddleware.run(root);
