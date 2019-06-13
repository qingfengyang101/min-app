/**
 *  server callback code to web
 *  error and success code for server
 *  for convenience check server code
 *  author: xyh
 *  date: 2019/6/13 16:10
 **/

const CODE_SERVER = {

    /** success code **/
    SUCCESS_CODE: 200,
    SUCCESS_CODE_LEADER: 204,
    SUCCESS_CODE_CONTENT: 206,

    /** moved permanently  **/
    SUCCESS_CODE_MOVED: 301,
    SUCCESS_CODE_FOUND: 302,
    SUCCESS_CODE_SEE_OTHER: 303,
    SUCCESS_CODE_NOT_MODIFIED: 304,
    SUCCESS_CODE_TEMPORARY_REDIRECT: 307,

    /** error code **/
    ERROR_CODE_BAD_REQUEST: 400,
    ERROR_CODE_UNAUTHORIZED: 401,
    ERROR_CODE_FORBIDDEN: 403,
    ERROR_CODE_NOT_FOUND: 404,

    /** server error code **/
    ERROR_CODE_SERVICE_ERROR: 500,
    ERROR_CODE_SERVICE_UNAVAILABLE: 503,
};

export default CODE_SERVER;