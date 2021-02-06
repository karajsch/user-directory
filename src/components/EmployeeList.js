import React from "react";
import "./style.css";
import API from "../utils/API";

class EmployeeList extends React.Component {
  //setting the state for the EmployeeList
  state = {
    users: [],
    search: "",
    sortDirection: "",
    col: "",
  };

  //get me a randomized list of all the employees after the component mounts
  componentDidMount() {
    API.usersList()
      .then((res) => {
        //using MAP method to map over the response creating an array of employees
        const allEmployees = res.data.results.map((user) => {
          return {
            first: user.name.first,
            last: user.name.last,
            email: user.email,
            username: user.login.username,
            image: user.picture.medium,
            city: user.location.city,
            state: user.location.state,
            country: user.nat,
          };
        });
        //add this array of workers to our state
        this.setState({ users: allEmployees });
      })
      .catch((err) => console.log(err));
  }

  //when the user enters a letter in the search bar, reflect that in the state
  searchUpdate = (e) => {
    this.setState({ search: e.target.value });
  };

  //using FILTER method to show employees that match search criteria
  searchResults() {
    const search = this.state.search.toLowerCase();
    return this.state.users.filter((user) => {
      return (
        user.first.toLowerCase().includes(search) ||
        user.last.toLowerCase().includes(search)
      );
    });
  }

  //using MAP function to create a table of employees map over it
  createEmployeeTable = () => {
    return this.searchResults()
      .sort(this.sortEmployeeList)
      .map((user, index) => {
        return (
          <tr key={index}>
            <td>
              <img src={user.image} alt="user"></img>
            </td>
            <td className="align-middle">{user.first}</td>
            <td className="align-middle">{user.last}</td>
            <td className="align-middle">
              {/* using template literal to make email addresses dynamic */}
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </td>
            <td className="align-middle">{user.username}</td>
            <td className="align-middle">{user.city}</td>
            <td className="align-middle">{user.state}</td>
            <td className="align-middle">{user.country}</td>
          </tr>
        );
      });
  };

  //when the columns are sorted, indicate which direction
  employeeSorter = (col) => {
    return this.state.col === col
      ? `category ${this.state.sortDirection}`
      : `category`;
  };

  //when the columns are sorted, indicate which direction
  handleSortDirectionChange = (col) => {
    this.state.col === col && this.state.sortDirection === "ascending"
      ? this.setState({ sortDirection: "descending", col: col })
      : this.setState({ sortDirection: "ascending", col: col });
  };

  //function to return 1 or -1 to sort function depending on sort direction
  sortEmployeeList = (a, b) => {
    if (a[this.state.col] < b[this.state.col]) {
      return this.state.sortDirection === "ascending" ? -1 : 1;
    } else if (a[this.state.col] > b[this.state.col]) {
      return this.state.sortDirection === "ascending" ? 1 : -1;
    }
    return 0;
  };

  //render the user container including search field
  render() {
    return (
      <>
        <div className="input-group justify-content-center w-50 m-auto">
          <div className="input-group-prepend"></div>
          <input
            onChange={this.searchUpdate}
            type="search"
            className="form-control form-control-md form-group p-1 m-1"
            placeholder="Search"
            aria-label="SearchBox"
          />
        </div>
        <div className="table table-border table-hover table-responsive-sm m-auto pt-2 pl-5 pr-5 pb-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Img</th>
                <th scope="col">
                  <span
                    className={this.employeeSorter("first")}
                    onClick={() => {
                      this.handleSortDirectionChange("first");
                    }}
                  >
                    First
                  </span>
                </th>
                <th scope="col">
                  <span
                    className={this.employeeSorter("last")}
                    onClick={() => this.handleSortDirectionChange("last")}
                  >
                    Last
                  </span>
                </th>
                <th scope="col">
                  <span
                    className={this.employeeSorter("email")}
                    onClick={() => this.handleSortDirectionChange("email")}
                  >
                    Email
                  </span>
                </th>
                <th scope="col">
                  <span
                    className={this.employeeSorter("username")}
                    onClick={() => this.handleSortDirectionChange("username")}
                  >
                    Username
                  </span>
                </th>
                <th scope="col">
                  <span
                    className={this.employeeSorter("city")}
                    onClick={() => this.handleSortDirectionChange("city")}
                  >
                    City
                  </span>
                </th>
                <th scope="col">
                  <span
                    className={this.employeeSorter("state")}
                    onClick={() => this.handleSortDirectionChange("state")}
                  >
                    State
                  </span>
                </th>
                <th scope="col">
                  <span
                    className={this.employeeSorter("country")}
                    onClick={() => this.handleSortDirectionChange("country")}
                  >
                    Country
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>{this.createEmployeeTable()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default EmployeeList;
