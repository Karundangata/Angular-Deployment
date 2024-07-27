

export interface AddUser{
    Name:string
    Email:string
    Password:string
}

export interface RegisterResponse{
    Message:string
}


export interface LoginReq{
    Email:string
    Password:string
}


export interface LoginResponse{
    message:string
    token:string
    isSuccess:boolean
}


export interface Book {
    Id:string
    Title:string,
    PublicationYear:string
    AuthorId:string
    GenreId:string
}


export interface Author {Id:string, Name:string}