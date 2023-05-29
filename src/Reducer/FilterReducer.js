
const FilterReducer = (state,action) => {

switch (action.type) {
    case 'LODE_FILTER_PRODUCT':
        return {
            ...state,
            filter_productes:[...action.paylode],
            all_productes:[...action.paylode]
            
        }
        
        

    default: return state
        
}


}


export default FilterReducer;