import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducer";

const authselectorFeature = createFeatureSelector<AuthInterface>('auth')


export const errorSelector= createSelector(authselectorFeature, (state)=>state.loginErrorMessage)