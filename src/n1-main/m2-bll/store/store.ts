import { createStore } from 'redux';
import {combineReducers} from 'redux';
import {loginReducer} from '../reducers/loginReducer';
import {profileReducer} from '../reducers/profileReducer';
import {registerReducer} from '../reducers/registerReducer';


export const reducers = combineReducers({
    login: loginReducer,
    profile: profileReducer,
    register: registerReducer,
})


export const store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>

//export type StoreType = typeof store;


// @ts-ignore
window.store = store
