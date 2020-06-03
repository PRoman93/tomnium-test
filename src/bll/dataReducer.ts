import {dataApi} from "../dal/api";
import {GET_DATA_SUCCESS} from "../common/Constants";
import {dataType, getDataSuccessActionCreatorType, initialStateType} from "../common/types";
import {Dispatch} from "redux";

const initialState: any = {
    data:
        {
            timestamp: 0,
            base: '',
            valid: false,
            rates: {"yo": 1}
        }
}

const dataReducer = (state: initialStateType = initialState, action: any): any => {
    switch (action.type) {
        case GET_DATA_SUCCESS: {
            return {
                ...state, data: action.data
            }
        }
        default:
            return state
    }
}
export default dataReducer

const getDataSuccessActionCreator = (data: dataType): getDataSuccessActionCreatorType => ({type: GET_DATA_SUCCESS, data})

export const getData = () => async (dispatch: Dispatch<getDataSuccessActionCreatorType>) => {
    try {
        let res = await dataApi.getData()
        dispatch(getDataSuccessActionCreator(res))
    } catch (e) {
        console.log(e)
    }

}
