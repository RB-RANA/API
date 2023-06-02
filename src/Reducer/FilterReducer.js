
const FilterReducer = (state,action) => {

switch (action.type) {
    case 'LODE_FILTER_PRODUCT':
        return {
            ...state,
            filter_productes:[...action.paylode],
            all_productes:[...action.paylode]
            
        };

        case 'GET_SORT_VALU':

            return {
                ...state,
                sorting_Value:action.paylode
                
            };
            case 'SORTING_PRODUCTS':
                let newSortData;
                const {filter_productes,sorting_Value} = state;
                let tempSortProduct = [...filter_productes];


                const sortingProduct = (a,b)=>{
                 if(sorting_Value === 'lowest') {
                    return a.price - b.price;
                 };
                 if(sorting_Value === 'highst') {
                    return b.price - a.price;
                 };
                 if(sorting_Value === 'AtoZ') {
                    return a.title.localeCompare(b.title);
                 };
                 if(sorting_Value === 'ZtoA') {
                    return b.title.localeCompare(a.title);
                 }
                };

                newSortData = tempSortProduct.sort(sortingProduct)

                return {
                    ...state,
                    filter_productes: newSortData
                }
        

    default: return state
        
}


}


export default FilterReducer;