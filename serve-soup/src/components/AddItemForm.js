import React from "react";
import { connect } from "react-redux";

//ReactBootStrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addItem } from "../actions";

class AddItemForm extends React.Component {
  state = {
    //create local state
    itemName: "",
    category: ""
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
    // console.log("Category:", this.state.category);
    this.props.addItem({
      name: this.state.itemName,
      category: this.state.category
    });
    this.setState({
      itemName: "",
      category: ""
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
          <FormGroup>
            <Label for="category">Category</Label>
            <Input
              type="select"
              name="category"
              value={this.state.category}
              onChange={this.changeHandler}
            >
              <option>Select</option>
              <option>Canned goods</option>
              <option>Dairy</option>
              <option>Dry Goods</option>
              <option>Spices/Herbs</option>
              <option>Produce</option>
            </Input>
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
