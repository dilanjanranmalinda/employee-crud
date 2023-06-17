import { NavLink } from "react-router-dom";
import "./home-page.scss";

export default function HomePage() {
  return (
    <div className="container">
      <div>
        <h1>Employee Details</h1>
        <table
          className="table-responsive table-bordered text-center"
          id="tbl-student"
        >
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email address</th>
              <th>Phone number</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>saman</td>
              <td>kumara</td>
              <td>saman@gmail.com</td>
              <td>0775530788</td>
              <td>M</td>
              <td>
                <NavLink to="/registration">
                  <button type="button">Edit</button>
                </NavLink>
              </td>
              <td>
                <button type="button">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="add-div">
        <h3>Add Employee here</h3>
        <NavLink to="/registration">
          <button type="button">Add</button>
        </NavLink>
      </div>
    </div>
  );
}
