import React from "react";
import { connect } from "react-redux";

//ReactBootStrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addItem } from "../actions";

class AddItemForm extends React.Component {
  state = {
    //create local state
    itemName: ""
    //add a successfull message when an item is added
  };
  //handler for input fields
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addItem({ name: this.state.itemName });
    this.setState({
      itemName: ""
    });
  };

  render() {
    return (
      <div className="add-item-container">
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="Item Name">Item Name</Label>
            <Input
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={this.state.itemName}
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
export default connect(
  null,
  { addItem }
)(AddItemForm);
