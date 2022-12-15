import { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { GlobalFilter } from './GlobalFilter';
import { DefaultColumnFilter } from './DefaultColumnFilter';

export const Table = ({ columns, data }) => {
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    rows,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className='mt-4' style={{ position: 'relative' }}>
      <div>
        Number of Results: <strong>{rows.length}</strong>
      </div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      {/* <input
        type='text'
        className='form-field'
        onChange={(e) => setFilter('sourceTitle', e.target.value)}
        placeholder='Search Source Title'
      /> */}
      <div
        style={{ marginLeft: '250px' }}
        className='-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg'
      >
        <table
          className='min-w-full divide-y divide-gray-300 table-fixed'
          {...getTableProps()}
        >
          <thead className='bg-gray-50'>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    {...column.getHeaderProps()}
                  >
                    <div>
                      <span {...column.getSortByToggleProps()}>
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </div>
                    {/* Render the columns filter UI */}
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            className='divide-y divide-gray-200 bg-white'
            {...getTableBodyProps()}
          >
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        style={{
                          wordWrap: 'break-word',
                        }}
                        className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav
        style={{ marginLeft: '250px' }}
        className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
        aria-label='Pagination'
      >
        <div className='hidden sm:block'>
          <div>
            <p className='text-sm text-gray-700 flex flex-1 justify-between sm:justify-start space-x-2'>
              <span className='font-normal'>
                Showing page {pageIndex + 1} of {pageOptions.length} results
              </span>
            </p>
          </div>
          <div className='flex items-center justify-between w-auto space-x-2'>
            <p className='text-sm text-gray-700 space-x-2'>Go to page:</p>
            <input
              className='mt-1 block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              type='number'
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
            <select
              className='mt-1 block w-auto rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='flex flex-1 justify-between sm:justify-end'>
          <button
            className={`${
              !canPreviousPage ? 'disabled:opacity-75' : 'hover:bg-gray-50'
            } relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700`}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>
          <button
            className={`${
              !canPreviousPage ? 'disabled:opacity-75' : 'hover:bg-gray-50'
            } relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700`}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className={`${
              !canNextPage ? 'disabled:opacity-75' : 'hover:bg-gray-50'
            } relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700`}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className={`${
              !canNextPage ? 'disabled:opacity-75' : 'hover:bg-gray-50'
            } relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700`}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>
      </nav>
    </div>
  );
};
