import { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PublicationsContext from '../context/publications/publicationsContext';
import { Table } from '../components/Table';
import { MultipleFilter } from '../components/MultipleFilter';
import { SelectColumnFilter } from '../components/SelectColumnFilter';

export const Publications = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title', // accessor is the "key" in the data
        Cell: ({ row }) => {
          let fullTitle = '';
          if (row.original.title === '') {
            fullTitle = row.original.sourceTitle;
          } else {
            fullTitle = row.original.title;
          }
          return (
            <Link
              className='text-blue-600 hover:text-blue-500'
              to={`/publication/${row.original.id}`}
            >
              {fullTitle}
            </Link>
          );
        },
        disableFilters: true,
      },
      // {
      //   Header: 'Source Title',
      //   accessor: 'sourceTitle', // accessor is the "key" in the data
      // },
      // {
      //   Header: 'Publication Title',
      //   Cell: ({ row }) => {
      //     let fullTitle = '';
      //     if (row.original.title === '') {
      //       fullTitle = row.original.sourceTitle;
      //     } else {
      //       fullTitle = row.original.title;
      //     }
      //     return (
      //       <Link
      //         className='text-blue-600 hover:text-blue-500'
      //         to={`/publication/${row.original.id}`}
      //       >
      //         {fullTitle}
      //       </Link>
      //     );
      //   },
      // },
      {
        Header: 'Name',
        Cell: ({ row }) => {
          return `${row.original.firstName} ${row.original.lastName}`;
        },
      },
      // {
      //   Header: 'First Name',
      //   accessor: 'firstName', // accessor is the "key" in the data
      // },
      // {
      //   Header: 'Last Name',
      //   accessor: 'lastName', // accessor is the "key" in the data
      // },
      {
        Header: 'Language',
        accessor: 'language', // accessor is the "key" in the data
        filter: MultipleFilter,
        Filter: SelectColumnFilter,
      },
      {
        Header: 'Document Type',
        accessor: 'documentType', // accessor is the "key" in the data
        filter: MultipleFilter,
        Filter: SelectColumnFilter,
      },
      {
        Header: 'Year',
        accessor: 'year',
        filter: MultipleFilter,
        Filter: SelectColumnFilter,
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
    <div class='container mx-auto px-4'>
      <div className='min-w-0 flex-1'>
        <h2 className='text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
          Publications
        </h2>
      </div>
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
