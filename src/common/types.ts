import {GET_DATA_SUCCESS} from "./Constants";

export type dataType = {
    timestamp:number,
    base:string,
    valid:boolean,
    rates:{}
}
export type initialStateType = {
    data:{}
}
export type getDataSuccessActionCreatorType = {
    type:typeof GET_DATA_SUCCESS,
    data:dataType
}
