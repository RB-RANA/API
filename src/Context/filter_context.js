import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducer'

const FilterContext = createContext()


const initialstate ={
    filter_productes : [],
    all_productes : [],
    sorting_Value : 'lowest',
}

export const FilterProvider = ({children})=>{

 const { product } = useProductContext();
 
 const [state,dispatch] = useReducer(reducer,initialstate);

 const sorting = (e)=>{
let userValue = e.target.value

 dispatch({type:'GET_SORT_VALU',paylode:userValue})
 };

 useEffect(()=>{
    dispatch({type:'SORTING_PRODUCTS'})

 },[state.sorting_Value])
 

useEffect(()=>{
dispatch({type:'LODE_FILTER_PRODUCT', paylode:product})
},[product])


    return <FilterContext.Provider value={{...state,sorting}}>{children}</FilterContext.Provider>;
}


export const useFiltercontest = () => {

    return useContext(FilterContext)
}