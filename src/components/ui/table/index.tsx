import { Table as NUTable, Row, Col, Tooltip, User, Text, styled } from "@nextui-org/react";

import { Props } from "./types";




const Table = ({ columns, data, renderCell: renderCellFromProps, renderColumn: renderColumnFromProps }: Props) => {

  const renderCell = renderCellFromProps || ((item, columnKey) => {
    const cellValue = item[columnKey];
    return (
      <Col>
        <Row>
          <Text b size={14} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        </Row>
      </Col>
    )
  })


  return (
    <NUTable
      aria-label="Example NUTable with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <NUTable.Header columns={columns}>
        {(column) => (
          <NUTable.Column
            key={column.uid}
            hideHeader={column?.hideHeader}
            align={column?.align}
          >
            {column.name}
          </NUTable.Column>
        )}
      </NUTable.Header>
      <NUTable.Body items={data}>
        {(item) => (
          <NUTable.Row>
            {(columnKey) => (
              <NUTable.Cell>{renderCell(item, columnKey)}</NUTable.Cell>
            )}
          </NUTable.Row>
        )}
      </NUTable.Body>
    </NUTable>

  );
}

export default Table