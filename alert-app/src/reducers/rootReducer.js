import { combineReducers } from "redux";

import { register, login } from "../scenes/auth/reducers/auth-reducer";
import { user } from "../scenes/dashborad/reducers/user-reducer";
import { alert } from "../scenes/dashborad/reducers/alert-reducer";

const root = combineReducers({ register, login, user, alert });

export default root;
