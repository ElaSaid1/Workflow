import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import signupImage from '../assets/logo.png';

export default function Signup() {
  return (
    <div className="container-fluid">
      <div className="row w-100 h-100">
        <div className="col-md-6 form-container">
          <div className="form-wrapper p-4">
            <h2 className="text-center mb-4">Sign up for an account</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAccountType">
                <Form.Label>Account Type</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Huawei Employee</option>
                  <option>Operator</option>
                  <option>Subcontractor</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Sign up
              </Button>
            </Form>
            <div className="mt-3 text-center">
              <span>Already have an account?</span>{" "}
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-0">
          <img src={signupImage} alt="Signup" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
