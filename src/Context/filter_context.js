import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducer'

const FilterContext = createContext()


const initialstate ={
    filter_productes : [],
    all_productes : []
}

export const FilterProvider = ({children})=>{

 const { product } = useProductContext();
 
 const [state,dispatch] = useReducer(reducer,initialstate);

useEffect(()=>{
dispatch({type:'LODE_FILTER_PRODUCT', paylode:product})
},[product])


    return <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>;
}


export const useFiltercontest = () => {

    return useContext(FilterContext)
}