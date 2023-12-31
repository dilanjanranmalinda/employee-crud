import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./registration-page.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .matches(/^[A-Za-z]+$/, "Should only contain alphabets")
    .min(6, "Must be at least 6 characters")
    .max(10, "Must be at most 10 characters"),
  lastName: Yup.string()
    .required("Required")
    .matches(/^[A-Za-z]+$/, "Should only contain alphabets")
    .min(6, "Must be at least 6 characters")
    .max(10, "Must be at most 10 characters"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string()
    .matches(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      "Invalid phone number"
    )
    .min(10, "Must be at least 10 characters")
    .max(16, "Can not be more than 16 characters")
    .required("Required"),
  gender: Yup.string().required("Required"),
});

const RegistrationForm = () => {
  const location = useLocation();

  // console.log("location.state", location.state);

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    if (location.state?._id) {
      try {
        const employeeId = location.state?._id;
        await axios.put(`http://localhost:3001/employee/${employeeId}`, values);

        alert("Employee updated successfully!");

        setSubmitting(false);
      } catch (error: any) {
        alert("Failed to update employee. Please try again.");

        setSubmitting(false);
      }
    } else {
      try {
        await axios.post("http://localhost:3001/employee", values);

        console.log("Submitted values:", values);

        alert("Successfully Added!");

        setSubmitting(false);
      } catch (error: any) {
        console.error("Error adding employee:", error);

        alert("Failed to add employee. Please try again.");

        setSubmitting(false);
      }
    }
  };

  return (
    <Formik
      initialValues={location.state?._id ? location.state : initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="registration-form">
          <h3>{location.state?._id ? "Update Form" : "Registration Form"}</h3>
          <label htmlFor="firstName">First Name</label>
          <Field type="text" id="firstName" name="firstName" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-message"
          />

          <label htmlFor="lastName">Last Name</label>
          <Field type="text" id="lastName" name="lastName" />
          <ErrorMessage
            name="lastName"
            component="div"
            className="error-message"
          />

          <label htmlFor="email">Email Address</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <Field type="text" id="phoneNumber" name="phoneNumber" />
          <ErrorMessage
            name="phoneNumber"
            component="div"
            className="error-message"
          />

          <label htmlFor="gender">Gender</label>
          <Field as="select" id="gender" name="gender">
            <option value="">Select</option>
            <option value="male">M</option>
            <option value="female">F</option>
          </Field>
          <ErrorMessage
            name="gender"
            component="div"
            className="error-message"
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
