export interface statusCategory{
    code:number,
    text:string,
    httpStatus:number
}
export namespace statusCode{
    export const SUCCESS:statusCategory = {
        code:0,
        text:'Success',
        httpStatus:200,
    };
    export const UNEXPECTED_ERR:statusCategory = {
        code:1,
        text:'Unexpected Error',
        httpStatus:500,
    };
    export const INVALID_REQUEST:statusCategory = {
        code:2,
        text:'Invalid Request',
        httpStatus:400,
    };
    export const FAILED:statusCategory = {
        code:3,
        text:'FAILED',
        httpStatus:403
    };
    export const NOT_LOGGED_IN:statusCategory = {
        code:100,
        text:'Not Logged In',
        httpStatus:403,
    };
    export const USER_NOT_FOUND:statusCategory = {
        code:101,
        text:'User Not Found',
        httpStatus:404,
    };
    export const USER_ALREADY_EXIST:statusCategory = {
        code:102,
        text:'User Already Exist',
        httpStatus:400,
    }
}