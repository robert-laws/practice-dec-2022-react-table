import { useContext, useEffect, useMemo } from 'react';
import PublicationsContext from '../context/publications/publicationsContext';
import { Table } from '../components/Table';
import { MultipleFilter } from '../components/MultipleFilter';

export const Publications = () => {
  function setFilteredParams(filterArr, val) {
    if (filterArr.includes(val)) {
      filterArr = filterArr.filter((n) => {
        return n !== val;
      });
    } else filterArr.push(val);

    if (filterArr.length === 0) filterArr = undefined;
    return filterArr;
  }

  function SelectColumnFilter({
    column: { filterValue = [], setFilter, preFilteredRows, id },
  }) {
    const options = useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id].trim());
      });
      return [...options.values()].sort();
    }, [id, preFilteredRows]);

    return (
      <>
        <div className='block'>
          <span className='block capitalize mb-4'>{id}</span>
          {options.map((option, i) => {
            return (
              <div key={i}>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                    id={option}
                    name={option}
                    value={option}
                    onChange={(e) => {
                      setFilter(setFilteredParams(filterValue, e.target.value));
                    }}
                  ></input>
                  <label
                    htmlFor={option}
                    className='ml-1.5 font-medium text-gray-700'
                  >
                    {option === '' ? 'No Language Listed' : option}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title', // accessor is the "key" in the data
        Cell: ({ value }) => {
          return value === '' ? 'No Title' : value;
        },
        disableFilters: true,
      },
      {
        Header: 'Source Title',
        accessor: 'sourceTitle', // accessor is the "key" in the data
      },
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
        Filter: SelectColumnFilter,
        filter: MultipleFilter,
      },
      {
        Header: 'Document Type',
        accessor: 'documentType', // accessor is the "key" in the data
        Filter: SelectColumnFilter,
        filter: MultipleFilter,
      },
      {
        Header: 'Year',
        accessor: 'year',
        Filter: SelectColumnFilter,
        filter: MultipleFilter,
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
