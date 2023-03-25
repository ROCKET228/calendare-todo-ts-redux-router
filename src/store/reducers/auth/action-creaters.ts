import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch, RootState} from "../../index";
import axios from "axios";
import { ThunkAction } from 'redux-thunk';
import {AnyAction} from "redux";
import { ThunkDispatch } from 'redux-thunk';
import UsersService from "../../../api/UsersService";

export const  AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string): ThunkAction<Promise<void>, RootState, null, AnyAction> => async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await UsersService.getUsers()
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setUser(mockUser));
                    dispatch(AuthActionCreators.setIsAuth(true))
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect password or login'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000)
        }catch (e){
            dispatch(AuthActionCreators.setError('Error'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setIsAuth(false))
    }
}