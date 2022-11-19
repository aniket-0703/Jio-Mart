import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_INIFINITE,
} from "./actionTypes";

const initState = {
  total: 0,
  loading: false,
  error: false,
  products: [],
};

function productReducer(state = initState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS: {
      // console.log(action.payload)
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload[1],
        total: parseInt(action.payload[0]),
      };
    }
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        total: 0,
        loading: true,
        error: false,
        products: [],
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        total: 0,
        loading: false,
        error: true,
        products: [],
      };
    }

    case GET_PRODUCTS_INIFINITE: {
      return {
        ...state,
        total : state.total,
        loading : state.loading,
        error : state.error,
        products : state.products.concat(action.payload)
      };
    }
    default: {
      return state;
    }
  }
}

export default productReducer;
