import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {EventActionEnum, SetEventAction, SetGuestsAction} from "./types";

export const EventActionCreators = {
    setGuests: (payload: IUser[]):SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvent: (payload: IEvent[]):SetEventAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests:
}