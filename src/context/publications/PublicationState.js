import { useReducer, useCallback } from 'react';
import { LOAD_PUBLICATIONS, PUBLICATIONS_ERROR } from '../types';
import PublicationsContext from './publicationsContext';
import publicationsReducer from './publicationsReducer';
import data from '../../data/faculty-data.json';

const PublicationsState = ({ children }) => {
  const initialState = {
    publications: [],
    isLoading: true,
    publicationsError: null,
  };

  const [state, dispatch] = useReducer(publicationsReducer, initialState);

  const loadPublications = useCallback(() => {
    let allPublications = [];
    data.forEach((faculty, index) => {
      allPublications.push({ id: index, ...faculty });
    });

    try {
      dispatch({ type: LOAD_PUBLICATIONS, payload: allPublications });
    } catch (error) {
      dispatch({
        type: PUBLICATIONS_ERROR,
        payload: `Database Error: ${error.message}`,
      });
    }
  }, [dispatch]);

  return (
    <PublicationsContext.Provider
      value={{
        publications: state.publications,
        isLoading: state.isLoading,
        publicationsError: state.publicationsError,
        loadPublications,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};

export default PublicationsState;
