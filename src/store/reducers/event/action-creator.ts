import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {EventActionEnum, SetEventAction, SetGuestsAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";
import UsersService from "../../../api/UsersService";

export const EventActionCreators = {
    setGuests: (payload: IUser[]):SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvent: (payload: IEvent[]):SetEventAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UsersService.getUsers();
            dispatch(EventActionCreators.setGuests(response.data));
        }catch (e){
            console.log(e);
        }
    }
}