import { SINGLE_GET_FAILURE, SINGLE_GET_REQUEST, SINGLE_GET_SUCCESS } from "./actionType"

const initState = {
    loading:false,
    error:false,
    product:{}
}
export const singleProductReducer = (state=initState,action)=>{
    switch(action.type){
        case SINGLE_GET_REQUEST:
            return{
                ...state,
                loading:true,
                error:false,
                product : {}
            }
        case SINGLE_GET_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                product: action.payload
            }  
        case SINGLE_GET_FAILURE:
            return{
                ...state,
                loading:false,
                error:true,
                product : {}
            }      
        default:
            return state    
    }
}