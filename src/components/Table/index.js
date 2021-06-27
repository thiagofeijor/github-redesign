import React from 'react'
import {
  Table,
  Head,
  EmptyState,
  Body,
  HeadCell,
  Row,
  Cell,
} from './components'

export default ({
  columns,
  dataTable = [],
}) => {
  if (!dataTable.length) return <EmptyState />

  return (
    <Table
      role="table"
      aria-colcount={columns.length}
      aria-rowcount={dataTable.length}
    >
      <Head>
        {columns.map((column, iColumn) => (
          <HeadCell
            role="columnheader"
            key={`columnheader-${iColumn}`}
            width={column.width}
          >
            {column.label}
          </HeadCell>
        ))}
      </Head>
      <Body>
        {dataTable.map((row, iRow) => (
          <Row role="row" key={`row-${iRow}`}>
            {columns.map((column, iColumn) => {
              const { width, render } = column
              return (
                <Cell
                  role="cell"
                  key={`columnrow-${iRow}-${iColumn}`}
                  width={width}
                >
                  {render ? render(row, iRow) : row[column.key]}
                </Cell>
              )
            })}
          </Row>
        ))}
      </Body>
    </Table>
  )
}
