import axios, { Method } from "axios";

const isProduction: boolean = false;
const isHml: boolean = false;
const isLocal = isProduction ? false : isHml ? false : true;



function getUrl () : string {
    let url: string;
    if (isProduction) url = '';
    if (isHml) url = '';
    else url = 'https:/localhost:8080/cdpix-api/';
    
    return url;
}

export

export enum api {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH
}