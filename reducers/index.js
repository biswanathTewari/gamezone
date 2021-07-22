import {combineReducers} from 'redux';

const initialReviews = [
  {
    title: 'Zelda, Breath of Fresh Air',
    rating: 5,
    body: 'lorem ipsum',
    key: '1',
  },
  {
    title: 'Gotta Catch Them All (again)',
    rating: 4,
    body: 'lorem ipsum',
    key: '2',
  },
  {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
];

const reviewsReducer = (state = initialReviews, action) => {
  switch (action.type) {
    case 'addReview':
      action.payload.key = (state.length + 1).toString();
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default combineReducers({
  reviews: reviewsReducer,
});
