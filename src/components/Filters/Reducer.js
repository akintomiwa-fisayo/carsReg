const prefix = 'FILTERS_';
const initState = {
  loading: true,
  filters: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case (`${prefix}SET_FILTERS`): {
      return {
        ...state,
        filters: action.filters,
      };
    }

    case (`${prefix}SET_LOADING`): {
      return {
        ...state,
        loading: true,
      };
    }

    case (`${prefix}SET_LOADED`): {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
