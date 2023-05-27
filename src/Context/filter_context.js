import { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./ProductContext";


const FilterContext = createContext()
const reducer = ()=>{}

const  initialstate ={
    filter_productes : [],
    all_productes : []
}

export const FilterProvider = ({children})=>{

 const { product } = useProductContext();
console.log(product)
 const [state,dispatch] = useReducer(reducer,initialstate);

    return <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>;
}


export const useFiltercontest = () => {

    return useContext(FilterContext)
}