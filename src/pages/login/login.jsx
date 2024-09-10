import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function FormGroup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const handleVAl = (evt) => {
    if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value.length == 0
            ? "email is required"
            : evt.target.value.includes("@")
            ? ""
            : "Email invalid",
      });
    } else {
      setUser({ ...user, password: evt.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.emailError && !errors.passwordError) {
      alert("Login successful");
      alert(`user email is ${user.email} && user password is ${user.password}`);
    } else {
      alert("Login failed");
    }
  };
  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Form.Group className="mb-3 " controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter email"
          onChange={(e) => handleVAl(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="passord"
          value={user.password}
          placeholder="Password"
          onChange={(e) => handleVAl(e)}
        />
      </Form.Group>
      <Button
        type="submit"
        className="d-grid gap-2 mx-auto"
        variant="primary"
        size="lg"
      >
        Block level button
      </Button>
    </Form>
  );
}
