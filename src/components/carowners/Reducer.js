const prefix = 'CAR_OWNER_';
const initState = {
  loading: false,
  loadingMore: false,
  carOwners: [],
  filter: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case (`${prefix}SET_CAR_OWNERS`): {
      return {
        ...state,
        carOwners: [
          ...state.carOwners,
          ...action.carOwners,
        ],
      };
    }

    case (`${prefix}SET_FILTER`): {
      return {
        ...state,
        filter: action.filter,
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

    case (`${prefix}SET_LOADING_MORE`): {
      return {
        ...state,
        loadingMore: true,
      };
    }

    case (`${prefix}SET_LOADED_MORE`): {
      return {
        ...state,
        loadingMore: false,
      };
    }

    default: {
      return state;
    }
  }
};
