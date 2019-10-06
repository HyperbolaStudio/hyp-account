import {mysqlConnection} from '../life/life';
import { CreateUserOptions } from '../../declarations/sql';
export function createUser(options:CreateUserOptions):Promise<void>{
    options.nickname = options.nickname?options.nickname:options.username;
    return new Promise((resolve,reject)=>{
        mysqlConnection.query({
            sql:'insert into user_basic (username,password_sha256,reg_time,nickname) values (?,?,?,?)',
            values:[options.username,options.passwordSHA256,new Date(),options.nickname],
        },(err)=>{
            if(err){
                reject(err);
                return;
            }else{
                resolve();
            }
        });
    });
}