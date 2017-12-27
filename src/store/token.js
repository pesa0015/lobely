const token = (state, action) => {
  switch (action.type) {
    case 'save':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'delete':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}
