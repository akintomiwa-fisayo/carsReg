const prefix = 'GENERAL_';
const initState = {
  headerHeight: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case (`${prefix}SET_HEADER_HEIGHT`): {
      return {
        ...state,
        headerHeight: action.value,
      };
    }

    default: {
      return state;
    }
  }
};
