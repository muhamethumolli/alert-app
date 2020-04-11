import { combineReducers } from "redux";

import { register, login } from "../scenes/auth/reducers/auth-reducer";
import { user } from "../scenes/dashborad/reducers/user-reducer";

const root = combineReducers({ register, login, user });

export default root;
