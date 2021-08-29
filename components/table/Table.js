import React from "react";
import { IoCaretForwardOutline,IoCaretBackOutline} from "react-icons/io5";
import { AiFillForward,AiFillBackward } from "react-icons/ai";



import { useTable, useSortBy, usePagination } from "react-table";
import Time from "../currentTime/CurrentTime";



export default function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, sortBy: [{id: Time, desc: true}] },
    },
    useSortBy,
    usePagination,
  );
   
  // Render the UI for your table
  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={headerGroup} {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={row}{...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td key={row}{...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="pagination">
        <AiFillBackward onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </AiFillBackward>{' '}
        <IoCaretBackOutline onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </IoCaretBackOutline>{' '}
        <IoCaretForwardOutline onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </IoCaretForwardOutline>{' '}
        <AiFillForward onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </AiFillForward>{' '} &nbsp;
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          &nbsp;- Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50, 999999].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
