import { combineReducers } from "redux";

import { register, login } from "../scenes/auth/reducers/auth-reducer";

const root = combineReducers({ register, login });

export default root;
