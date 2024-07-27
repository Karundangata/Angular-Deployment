import { createAction, createReducer, on } from "@ngrx/store";

export interface CounterInterface{
    count:number
}

const initialState:CounterInterface={
    count:12
}
export const counterReducer = createReducer(
    initialState,

    on(createAction('Increment'), (state)=>{
        return {
            ...state,
            count:state.count+1
        }
    }),
    on(createAction('Decrement'), (state)=>{
        return {
            ...state,
            count:state.count-1
        }
    }),

    on(createAction('Reset'), (state)=>{
        return {
            ...state,
            count:0
        }
    })
)