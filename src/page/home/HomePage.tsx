import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <div>
        <h1>Employee Details</h1>
        <table
          id="tbl-student"
          className="table-responsive table-bordered text-center"
          cellPadding={0}
          width="100%"
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
              <td> saman </td>
              <td> kumara </td>
              <td> saman@gmail.com </td>
              <td> 0775530788 </td>
              <td> M </td>
              <td>
                <button type="button">
                  <Link to="/RegistrationForm">Edit</Link>
                </button>
              </td>
              <td>
                <button type="button"> Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="HomePage">
        <h3>Add Employee here</h3>
        <button type="button">
          <Link to="/RegistrationForm">Add</Link>
        </button>
      </div>
    </div>
  );
}
