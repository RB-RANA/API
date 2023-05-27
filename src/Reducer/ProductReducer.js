
const ProductReducer = (state, action) => {

  switch (action.type) {
    case 'SET_LOADING':

      return {
        ...state,
        isLoading: true,
      };

    case 'SET_API_DATA':

      const featuredData = action.payload.filter((curElem) => {

        return curElem.featured === true;

      });

      return {
        ...state,
        isLoading: false,
        product: action.payload,
        featureProduct: featuredData,
      }

    case 'API_ERROR':

      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case 'SET_LOADING':

      return {
        ...state,
        isLoading: true,
      };

      case 'SINGEL_PRODUCT':
        return{
          ...state,
          isLoading: false,
          singleProducts:action.payload,
        };
        
        case 'SINGLE_ERROR':

      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    default:
      return state;
  }
}

export default ProductReducer