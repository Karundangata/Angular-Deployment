import {  Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../Services/auth.service";
import { AuthActions } from "../Actions/auth.actions";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects{

    constructor(private action$:Actions,private router:Router, private auth:AuthService){}

    registerUser$=createEffect(()=>{
       return this.action$.pipe(
            //filtering all action and only listening to Register action
            ofType(AuthActions.register),
            //receiving input from action reaching out tho the service
            concatMap(req=>this.auth.registerUser(req.user).pipe(
                map(res=>AuthActions.registerSuccess({response:res})),
                catchError(error=>of(AuthActions.registerFailure({message:error})))
            ))
        )
    })


    loginUser$=createEffect(()=>{
        return this.action$.pipe(
             //filtering all action and only listening to Register action
             ofType(AuthActions.login),
             //receiving input from action reaching out tho the service
             exhaustMap(({user})=>this.auth.loginUsers(user).pipe(
                 map(res=>{
                    localStorage.setItem('token', res.token)
                    this.router.navigate(['/blogs'])
                   return AuthActions.loginSuccess({response:res})
                }),
                 catchError(error=>of(AuthActions.loginFailure({message:error.error.message})))
             ))
         )
     })
}