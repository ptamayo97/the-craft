import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <div className="mt-5 pt-5">
        <h1>Contact Us</h1>
      </div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Name</Label>
          <Input
            type="text"
            name="Name"
            id="examplePassword"
            placeholder="your name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Talk to us</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Example;
