export interface CreateUserOptions{
    username:string;
    passwordSHA256:string;
    nickname?:string;
}