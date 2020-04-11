import { combineReducers } from "redux";

import { register, login } from "../scenes/auth/reducers/auth-reducer";
import { user } from "../scenes/dashborad/reducers/user-reducer";
import { alert } from "../scenes/dashborad/reducers/alert-reducer";
import { event } from "../scenes/dashborad/reducers/event-reducer";
import { method } from "../scenes/dashborad/reducers/method-reducer";

const root = combineReducers({ register, login, user, alert, event, method });

export default root;
