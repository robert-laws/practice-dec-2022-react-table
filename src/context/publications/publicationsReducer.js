import { LOAD_PUBLICATIONS, PUBLICATIONS_ERROR } from '../types';

const publicationsReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        publication: null,
        isLoading: false,
        publicationsError: null,
        publicationError: null,
      };

    case PUBLICATIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        publicationsError: action.payload,
      };

    default:
      return state;
  }
};

export default publicationsReducer;
