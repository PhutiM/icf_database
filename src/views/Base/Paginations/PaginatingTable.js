import React from "react";
import {
  BootstrapTable,
  TableHeaderColumn
  //ExportCSVButton,
  //ClearSearchButton
} from "react-bootstrap-table";

const PaginationTable = ({ data, total_count, options, tableHeaders }) => {
  return (
    <BootstrapTable
      data={data}
      options={options}
      fetchInfo={{ dataTotalSize: total_count }}
      pagination
      search={true}
      striped={true}
      multiColumnSearch={true}
      hover
      condensed
      exportCSV
    >
      {tableHeaders.map((header, index) => (
        <TableHeaderColumn
          key={index}
          dataField={header.dataField}
          isKey={header.isKey}
          dataSort={true}
          style={{ height: 10 }}
        >
          {header.name}
        </TableHeaderColumn>
      ))}
    </BootstrapTable>
  );
};

export default PaginationTable;
