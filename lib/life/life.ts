import mysql from 'mysql';
import hapi from '@hapi/hapi';
import mysqlOptions from '../../config/mysql_options';
import serverOptions from '../../config/server_options';

export const httpServer = new hapi.Server(serverOptions);
export const mysqlConnection = mysql.createConnection(mysqlOptions);

import {setSessionState} from './session_state';
setSessionState(httpServer);

export async function start(){
    httpServer.start();
    mysqlConnection.connect((err)=>{
        if(err){
            throw err;
        }
    });
    console.log('Server starts.');
}
start();