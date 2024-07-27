import { createActionGroup, props } from "@ngrx/store";
import {  LoginUser, AddUser, LoginResponse, RegisterResponse } from "../../Models/Auth";

export const AuthActions=createActionGroup({
    source:"AUTH API",
    events:{
        'login':props<{user:LoginUser}>(),
        'login success':props<{response:LoginResponse}>(),
        'login failure':props<{message:string}>(),


        'register':props<{user:AddUser}>(),
        'register success':props<{response:RegisterResponse}>(),
        'register failure':props<{message:string}>()


          // AUTH API register
    }
})