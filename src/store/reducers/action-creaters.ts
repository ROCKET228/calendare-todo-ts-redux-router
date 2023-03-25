import {AuthActionCreators} from "./auth/action-creaters";
import {EventActionCreators} from "./event/action-creator";

export const  allActionCreaters = {
    ...AuthActionCreators,
    ...EventActionCreators
}