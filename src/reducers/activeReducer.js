export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_VERTICAL':
      return { vertical: action.vertical };
    case 'SET_ACTIVE_CATEGORY':
      return { ...state, category: action.category };
    case 'REMOVE_ACTIVE_CATEGORY':
      return { ...state, category: null };
    case 'SET_ALL':
      return {};
    default:
      return state
  }
}