/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_FROM_DURATION = createActionName('CHANGE_FROM_DURATION');
export const CHANGE_TO_DURATION = createActionName('CHANGE_TO_DURATION');
export const SELECT_REGION = createActionName('SELECT_REGION');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeFromDuration = (payload) => ({
  payload,
  type: CHANGE_FROM_DURATION,
});
export const changeToDuration = (payload) => ({
  payload,
  type: CHANGE_TO_DURATION,
});
export const selectRegion = (payload) => ({ payload, type: SELECT_REGION});
export const addTag = (payload) => ({ payload, type: ADD_TAG });
export const removeTag = (payload) => ({ payload, type: REMOVE_TAG });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_FROM_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload,
        },
      };
    case CHANGE_TO_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload,
        },
      };
    case SELECT_REGION:
      return {
        ...statePart,
        region: action.payload,
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags.filter((tag) => tag !== action.payload)],
      };
    default:
      return statePart;
  }
}
