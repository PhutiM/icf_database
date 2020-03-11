import React, { Component } from "react";
import {
  BootstrapTable,
  TableHeaderColumn,
  ExportCSVButton
} from "react-bootstrap-table";
import _ from "lodash";
import "../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css";
import PaginationTable from "../Paginations/PaginatingTable";
import { Card, CardBody } from "reactstrap";

var camps;
var dataTable = _.range(1, 5).map(x => ({
  id: x,
  name: `Name ${x}`,
  surname: `Surname ${x}`
}));
console.log("This", dataTable);
// Simulates the call to the server to get the data
const fakeDataFetcher = {
  fetch(page, size) {
    return new Promise((resolve, reject) => {
      resolve({
        items: _.slice(dataTable, (page - 1) * size, (page - 1) * size + size),
        total: 20
      });
    });
  }
};

class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      totalSize: 0,
      total_count: 10,
      page: 1,
      sizePerPage: 10,
      data: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSizePerPageChange = this.handleSizePerPageChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.Data();
  }

  Data() {
    fetch("http://localhost:8000/partners.php", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json" // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({}) // <-- Post parameters
    })
      .then(response => response.json())
      .then(responseJson => {
        //Here
        this.setState({ data: responseJson.data });
      })
      .catch(error => {
        alert(error);
      });
  }

  fetchData(page = this.state.page, sizePerPage = this.state.sizePerPage) {
    fakeDataFetcher.fetch(page, sizePerPage).then(data => {
      // this.GetCampaigns(page, sizePerPage);
      this.setState({
        items: this.state.data,
        totalSize: this.state.total_count,
        page,
        sizePerPage
      });
    });
  }

  handlePageChange(page, sizePerPage) {
    this.fetchData(page, sizePerPage);
  }

  handleSizePerPageChange(sizePerPage) {
    // When changing the size per page always navigating to the first page
    this.fetchData(1, sizePerPage);
  }

  createCustomExportCSVButton = onClick => {
    return (
      <ExportCSVButton
        btnText="Export CSV"
        onClick={() => this.handleExportCSVButtonClick(onClick)}
      />
    );
  };

  handleExportCSVButtonClick = onClick => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log("This is my custom function for ExportCSVButton click event");
    onClick();
  };

  render() {
    const options = {
      onPageChange: this.handlePageChange,
      onSizePerPageList: this.handleSizePerPageChange,
      page: this.state.page,
      sizePerPage: this.state.sizePerPage,
      exportCSVBtn: this.createCustomExportCSVButton
    };

    const tableHeaders = [
      { dataField: "id", name: "ID", isKey: true },
      { dataField: "name", name: "Name", isKey: false },
      { dataField: "surname", name: "Surname", isKey: false },
      { dataField: "mobile", name: "Mobile", isKey: false },
      { dataField: "address", name: "Address", isKey: false },
      { dataField: "dob", name: "Date of Birth", isKey: false },
      { dataField: "gender", name: "Gender", isKey: false },
      { dataField: "department", name: "department", isKey: false }
    ];

    return (
      <Card>
        <CardBody>
          <PaginationTable
            data={this.state.data}
            options={options}
            total_count={this.state.total_count}
            tableHeaders={tableHeaders}
          />
        </CardBody>
      </Card>
    );
  }
}

export default Tables;
