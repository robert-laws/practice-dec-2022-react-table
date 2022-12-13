import { useContext, useEffect, useMemo } from 'react';
import PublicationsContext from '../context/publications/publicationsContext';
import { Table } from '../components/Table';

export const Publications = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'TItle',
        accessor: 'title', // accessor is the "key" in the data
      },
      {
        Header: 'Source Title',
        accessor: 'sourceTitle', // accessor is the "key" in the data
      },
      {
        Header: 'First Name',
        accessor: 'firstName', // accessor is the "key" in the data
      },
      {
        Header: 'Last Name',
        accessor: 'lastName', // accessor is the "key" in the data
      },
      {
        Header: 'Document Type',
        accessor: 'documentType', // accessor is the "key" in the data
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
    ],
    []
  );

  const { publications, isLoading, publicationsError, loadPublications } =
    useContext(PublicationsContext);

  useEffect(() => {
    if (publications.length === 0) {
      loadPublications();
    }
  }, [publications, loadPublications]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {publicationsError && <p>{publicationsError}</p>}
      {/* {publications.map((publication, index) => (
        <div key={index}>
          <p>{publication.documentType}</p>
        </div>
      ))} */}
      <Table columns={columns} data={publications} />
    </div>
  );
};
