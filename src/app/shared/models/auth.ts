
export interface  IregisterUser {
    email : string,
    password : string,
    userrole : 'admin' | 'superAdmin' | 'buyer'
}

export interface ILoginUser {
    email : string,
    password : string,
}


export interface IsignupResponse {

    
}