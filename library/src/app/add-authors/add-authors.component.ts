import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthorsService } from '../Services/authors.service';
import { Author } from '../Models';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-authors',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './add-authors.component.html',
  styleUrl: './add-authors.component.css'
})
export class AddAuthorsComponent  implements OnInit{
  constructor(private fb:FormBuilder, private route:ActivatedRoute,private router:Router, private authorService:AuthorsService){}
  form!:FormGroup
  Id!:string
  buttonText="Add Author"
  authors:Author[]=[]

ngOnInit(): void {
  this.form=this.fb.group({
    Name:this.fb.control(null, Validators.required)
  })

  this.authorService.getAuthors().subscribe(res=>{
    this.authors=res
  })

  this.route.params.subscribe((params:Params)=>{
    this.Id=params['id']

    if(this.Id!='0'){
      this.buttonText="Update Author"
      this.authorService.getAuthor(params['id']).subscribe(res=>{
        this.form.setValue({
          Name:res.Name
        })
      })
     
    }
    
  })
}

onSubmit(){
 console.log( this.Id);
 
if(this.Id==='0'){
  console.log("Creating");
  
  this.authorService.postAuthor(this.form.value.Name).subscribe(res=>{
    console.log(res);
    
  })
}else{
  this.authorService.updateAuthor(this.form.value.Name, this.Id).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/authors/0'])
  })
}
}
}
