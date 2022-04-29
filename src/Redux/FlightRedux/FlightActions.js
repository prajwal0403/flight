import axios from "axios";

export const GET_DATA_LOADING="GET_DATA_LOADING";
export const GET_DATA_ERROR="GET_DATA_ERROR";
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS";
export const get_data_loading=()=>({type:GET_DATA_LOADING});
export const get_data_error=()=>({type:GET_DATA_ERROR})
export const get_data_success=(payload)=>({type:GET_DATA_SUCCESS , payload})

export const fetch_data=(start,end)=>(dispatch)=>{
           dispatch(get_data_loading())
           axios.get(`https://flight-assignment.herokuapp.com/flight_routes?start=${start}&end=${end}`).then((res)=>{
               dispatch(get_data_success(res.data))
           }).catch((err)=>{
               console.log(err.message)
               dispatch(get_data_error())
           })
    
}