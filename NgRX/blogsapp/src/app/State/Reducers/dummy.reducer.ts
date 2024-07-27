import { createAction, createReducer, on } from "@ngrx/store";
import { Toggle } from "../Actions/dummy.actions";

export interface DummyRI{
    showParagraph:boolean
    dummyData:string
}

const initialState:DummyRI={
    dummyData:'',
    showParagraph:false
}

export const dummyReducer= createReducer(
    initialState,
    on(Toggle,(state)=>{
        return{
            ...state,
            showParagraph:!state.showParagraph
        }
    })
)