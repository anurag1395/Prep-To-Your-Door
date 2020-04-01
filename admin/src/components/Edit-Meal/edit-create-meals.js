import React, { Component } from "react";

import Jumbotron from "../Jumbotron/Jumbotron-edit-meal";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import MaterialTable from "material-table";
import { Dropdown, Table, Card, Button, Tabs, Tab } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class EditCreateMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // columns: [
      //   { title: "Meal", field: "meal" },
      //   {
      //     title: "Drop Down",
      //     field: "dropdown",
      //     lookup: { 1: "Spicy Chicken", 2: "salad" }
      //   },
      //   { title: "Avg Sales", field: "sales" }
      // ],
      // data: [
      //   { meal: "Special_1", dropdown: 1, sales: 99 },
      //   {
      //     meal: "Secial_2",
      //     dropdown: 2,
      //     sales: 32
      //   }
      // ],
      // query: {
      //   page: 1,
      //   pageSize: 10
      // },
      age: "default",
      temp: []
    };
  }

  handleChange = event => {
    this.setState({ age: event.target.value });
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "10%", padding: "50px" }}>
        {/* <div className="scrollItem">Card</div> */}

        {/* title for the site ----------------------------------------- */}
        <Jumbotron />

        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" onClick={this.handleClick}>
            Admin Site
          </Link>
          <Typography color="textPrimary">Edit/Create Meal</Typography>
        </Breadcrumbs>
        <br />
        {/* <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.age}
            onChange={this.handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Meal Category</th>
              <th>Meal</th>
              <th>Avg Sales/Posting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weekly Entree</td>
              <td>
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.age}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </td>
              <td>25</td>
            </tr>
            <tr>
              <td>Weekly Salad</td>
              <td>Black Rice Salad</td>
              <td>50</td>
            </tr>
            {console.log(this.state.temp)}
            {this.state.temp}
          </tbody>
        </Table>
        <Button
          variant="primary"
          onClick={() => {
            this.addRow();
          }}
        >
          Add Meal
        </Button>

        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

        {/* <Card style={{ boxShadow: "0px 5px 10px 4px rgba(0,0,0,0.2)" }}>
          <MaterialTable
            title={this.date()}
            columns={this.state.columns}
            data={this.state.data}
            options={{
              selection: true,
              actionsColumnIndex: -1,
              pageSize: this.state.query.pageSize
            }}
            actions={[
              {
                tooltip: "Remove All Selected Users",
                icon: "delete",
                onClick: (evt, data) =>
                  alert("You want to delete " + data.length + " rows")
              }
            ]}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      this.setState(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                })
            }}
          />
          <TableRow>
            <TableCell>Expect Number of Sales (Total)</TableCell>
          </TableRow>
        </Card> */}
      </div>
    );
  }
  addRow = () => {
    console.log("fsdfhksjfhkjskfjsdhfkshfjs");
    let x = (
      <tr>
        <td>Weekly Salad</td>
        <td>Black Rice Salad</td>
        <td>50</td>
      </tr>
    );
    this.state.temp.push(x);
    this.setState({
      temp: this.state.temp
    });
  };
}
export default EditCreateMeal;
