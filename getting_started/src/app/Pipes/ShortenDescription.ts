import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'shortenDescription',
    standalone:true
})
export class ShortenDescription implements PipeTransform {
    transform(value:string, limit:number):string {
       if(value.length<=limit){
        return value
       }
       return value.substring(0, limit) +'...'
    }

}