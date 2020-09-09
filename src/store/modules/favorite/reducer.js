export default function favorites(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.dog];
    default:
      return state;
  }
}
