import React from "react";

//ReactBootStrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddItemForm extends React.Component {
  state = {
    //create local state
  };
  //handler for input fields
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    //call the action to pass the values from state
  };

  render() {
    return (
      <div className="add-item-container">
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="Current Stock">Current Stock</Label>
            <Input
              type="text"
              name="current-stock"
              placeholder="Current Stock"
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Category">Category</Label>
            <Input
              type="text"
              name="category"
              placeholder="Category"
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

//use connect
export default AddItemForm;
