import hapi from '@hapi/hapi';
const config:hapi.ServerStateCookieOptions = {
    ttl:3*365*24*60*60*1000,
    isHttpOnly:true,
    domain:'/',
};
export default config;