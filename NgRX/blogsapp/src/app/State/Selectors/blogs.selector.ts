import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogInterface } from "../Reducers/blog.reducer";


const blogsFeatureSelector= createFeatureSelector<BlogInterface>('blogs')


export const blogsSelector= createSelector(blogsFeatureSelector, (state)=>state.blogs)
export const blogsIdSelector= createSelector(blogsFeatureSelector, (state)=>state.Id)
export const blogsUserIdSelector= createSelector(blogsFeatureSelector, (state)=>state.userId)
//custom
export const blogSelector= createSelector(
    blogsSelector,
    blogsIdSelector,
    (blogs,Id)=>blogs.find(x=>x.Id===Id)
)

export const userBlogSelector= createSelector(
    blogsSelector,
    blogsUserIdSelector,
    (blogs,Id)=>blogs.filter(x=>x.Id===Id)
)
