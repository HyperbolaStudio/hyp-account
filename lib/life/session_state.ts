import hapi from '@hapi/hapi';
import CookieOptions from '../../config/session_cookie_options';
export function setSessionState(server:hapi.Server){
    CookieOptions.encoding = 'base64';
    CookieOptions.ignoreErrors = true;
    server.state('session_id',CookieOptions);
}