import { createReducer, on } from "@ngrx/store"
import { AuthActions } from "../Actions/auth.actions"

export interface AuthInterface {
    loginSuccessMessage:string
    loginErrorMessage:string
    loginLoading:boolean
    registerSuccessMessage:string
    registerErrorMessage:string
    registerLoading:boolean
}

const initialstate:AuthInterface={
    loginErrorMessage:'',
    loginLoading:false,
    loginSuccessMessage:'',
    registerErrorMessage:'',
    registerLoading:false,
    registerSuccessMessage:''
}


export const authReducer= createReducer(
    initialstate,
    on(AuthActions.login, (state)=>{
        return{
            ...state,
            loginErrorMessage:'',
            loginSuccessMessage:'',
            loginLoading:true
        }
    }),

    on(AuthActions.loginSuccess, (state, action)=>{
        return{
            ...state,
            loginErrorMessage:'',
            loginSuccessMessage:action.response.message,
            loginLoading:false
        }
    }),

    on(AuthActions.loginFailure, (state, {message})=>{
        return{
            ...state,
            loginErrorMessage:message,
            loginSuccessMessage:'',
            loginLoading:false
        }
    }),
    on(AuthActions.register, (state)=>{
        return{
            ...state,
            registerErrorMessage:'',
            registerSuccessMessage:'',
            registerLoading:true
        }
    }),
    on(AuthActions.registerSuccess, (state,action)=>{
        return{
            ...state,
            registerErrorMessage:'',
            registerSuccessMessage:action.response.message,
            registerLoading:false
        }
    }),
    on(AuthActions.registerFailure, (state, {message})=>{
        return{
            ...state,
            registerErrorMessage:message,
            registerSuccessMessage:'',
            registerLoading:false
        }
    }),
)