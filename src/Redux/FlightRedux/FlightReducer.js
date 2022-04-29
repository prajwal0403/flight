import { GET_DATA_ERROR, GET_DATA_LOADING ,GET_DATA_SUCCESS} from "./FlightActions"


const intialState={
    isLoading:false,
    data:[],
    error:false
}
export const FlightReducer=( store=intialState, {type,payload})=>{
    switch(type){
        case GET_DATA_LOADING: return {...store, isLoading:true}
        case GET_DATA_ERROR: return {...store, isLoading:false,error:true}
        case GET_DATA_SUCCESS: return {...store, data:payload , isLoading:false,error:false}
        default: return store
    }

}