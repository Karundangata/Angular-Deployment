import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DummyRI } from "../Reducers/dummy.reducer";
//we select slice
const dummySelector = createFeatureSelector<DummyRI>('dummy')

//select a single property in the slice
export const  dummyparagraphSelector=createSelector(
    dummySelector,
    (state)=>state.showParagraph
)

export const  dummyDataSelector=createSelector(
    dummySelector,
    (state)=>state.dummyData
)