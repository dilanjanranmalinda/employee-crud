import { Link } from "react-router-dom";
import "./home-page.scss";
import { useEffect, useState } from "react";
import { Employee } from "../../interfaces/interfaces";
import axios from "axios";

export default function HomePage() {
  const [data, setData] = useState<Employee[]>();

  const onDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`http://localhost:3001/employee/${id}`);
        alert("Employee deleted successfully");
      } catch (error: any) {
        alert(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await axios.get<Employee[]>(
          "http://localhost:3001/employee"
        );

        setData(response.data);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    };
    getEmployees();
  }, [onDelete]);

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
            {data &&
              data.map(
                ({ _id, firstName, lastName, email, phoneNumber, gender }) => {
                  return (
                    <tr key={_id}>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{email}</td>
                      <td>{phoneNumber}</td>
                      <td>{gender}</td>
                      <td>
                        <Link
                          to="/employee/edit"
                          state={{
                            _id,
                            firstName,
                            lastName,
                            email,
                            phoneNumber,
                            gender,
                          }}
                        >
                          <button type="button">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="del-button"
                          onClick={() => onDelete(_id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </div>
      <div className="add-div">
        <h3>Add Employee here</h3>
        <Link to="/employee/add">
          <button type="button">Add</button>
        </Link>
      </div>
    </div>
  );
}
