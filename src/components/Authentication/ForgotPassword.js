import { useRef, useState } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const ForgotPassword = () => {
  const emailRef = useRef();

  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();

  const { resetPassword } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please check your inbox for further instructions");
    } catch {
      setError("Failed to send reset email");
    }
    setLoading(false);
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 mt-3">
            <Link to="/login">Login Instead</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};
export default ForgotPassword;
