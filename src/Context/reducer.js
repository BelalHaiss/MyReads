const reducer = (state, action) => {
  switch (action.type) {
    case 'getBooks':
      return { ...state, Books: action.data, loading: false };

    case 'setLoading':
      return { ...state, loading: true };
    default:
      return state;
  }
};
const initialState = {
  Books: [],
  loading: false
};
export default reducer;
