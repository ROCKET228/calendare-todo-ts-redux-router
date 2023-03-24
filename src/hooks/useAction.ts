import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {allActionCreaters} from "../store/reducers/action-creaters";

export const  useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreaters, dispatch);
}