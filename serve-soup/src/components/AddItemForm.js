import React from "react";

//implementing routing
import { Link } from "react-router-dom";

//BootStrap
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class AddItemForm extends React.Component {
  render() {
    return (
      <div className="add-item-container">
        <Link to="/">Home</Link>
        <Form>
          <FormGroup>
            <Label for="Current Stock">Current Stock</Label>
            <Input
              type="text"
              name="current-stock"
              placeholder="Current Stock"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Category">Category</Label>
            <Input type="text" name="category" placeholder="Category" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddItemForm;
