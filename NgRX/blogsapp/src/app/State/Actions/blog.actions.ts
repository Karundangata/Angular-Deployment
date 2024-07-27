import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddBlog, AddResponse, Blog } from "../../Models/Blog";


export const BlogActions= createActionGroup({
    source:'BLOG API',
    events:{
        'add':props<{newblog:AddBlog}>(),
        'add success':props<{response:AddResponse}>(),
        'add Failure':props<{message:string}>(),

        'get':emptyProps(),
        'get success':props<{blogs:Blog[]}>(),
        'get Failure':props<{message:string}>(),

        'get Blog':props<{id:string}>(),
        'get User Blog':props<{userId:string}>(),
    }
})