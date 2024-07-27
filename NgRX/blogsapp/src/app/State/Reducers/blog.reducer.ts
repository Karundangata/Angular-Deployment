import { createReducer, on } from "@ngrx/store"
import { Blog } from "../../Models/Blog"
import { BlogActions } from "../Actions/blog.actions"

export interface BlogInterface{
    //get a blog
    Id:string
    //get user Blogs
    userId:string
    ///getAllBlogs
    blogs:Blog[]
    blogsError:string
    blogLoading:boolean
    //addBlogs
    addBlogSuccessMessage:string
    addBlogErrorMessage:string
    addBlogLoading:boolean

}


const initialstate:BlogInterface={
    addBlogErrorMessage:'',
    addBlogLoading:false,
    addBlogSuccessMessage:'',
    blogs:[],
    blogLoading:false,
    blogsError:'',
    Id:'',
    userId:''
}

export const blogReducer= createReducer(
    initialstate,
    on(BlogActions.add, (state)=>{
        return {
            ...state,
            addBlogLoading:true,
            addBlogErrorMessage:'',
            addBlogSuccessMessage:''
        }
    }),
    on(BlogActions.addSuccess, (state, {response})=>{
        return {
            ...state,
            addBlogLoading:false,
            addBlogErrorMessage:'',
            addBlogSuccessMessage:response.message
        }
    }),
    on(BlogActions.addFailure, (state, {message})=>{
        return {
            ...state,
            addBlogLoading:false,
            addBlogErrorMessage:message,
            addBlogSuccessMessage:''
        }
    }),

    on(BlogActions.get, (state,)=>{
        return {
            ...state,
           blogs:[],
           blogLoading:true,
           blogsError:''
        }
    }),

    on(BlogActions.getSuccess, (state,{blogs})=>{
        return {
            ...state,
           blogs:blogs,
           blogLoading:false,
           blogsError:''
        }
    }),
    on(BlogActions.getFailure, (state,{message})=>{
        return {
            ...state,
           blogs:[],
           blogLoading:false,
           blogsError:message
        }
    }),

    on(BlogActions.getBlog, (state,{id})=>{
        return {
            ...state,
           Id:id
        }
    }),

    on(BlogActions.getUserBlog, (state,{userId})=>{
        return {
            ...state,
           userId
        }
    }),
)