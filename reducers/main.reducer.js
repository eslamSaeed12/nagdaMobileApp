const initialState = {
  acitvePage: 'home',
};

export default (state = initialState, action) => {
  if (action.type === 'ROUTE') {
    return {...state, acitvePage: action.payload};
  }

  return state;
};
