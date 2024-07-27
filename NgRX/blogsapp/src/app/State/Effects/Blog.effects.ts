import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BlogService } from "../../Services/blog.service";
import { BlogActions } from "../Actions/blog.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable()
export class BlogEffects{
    constructor(private action$:Actions, private router:Router, private blogService:BlogService){}


    addBlog$=createEffect(()=>{
        return this.action$.pipe(
            ofType(BlogActions.add),
            mergeMap(({newblog})=>this.blogService.addBlog(newblog).pipe(
                map(response=> {
                    this.router.navigate(['/blogs'])
                   return BlogActions.addSuccess({response})
                }),
                catchError(error=> of(BlogActions.addFailure({message:error.error.message})))
            ))
        )
    })

    getBlogs$=createEffect(()=>{
        return this.action$.pipe(
            ofType(BlogActions.get),
            mergeMap(()=>this.blogService.getAllBlogs().pipe(
                map(response=>BlogActions.getSuccess({blogs:response})
                ),
                catchError(error=> of(BlogActions.getFailure({message:error.error.message})))
            ))
        )
    })
}