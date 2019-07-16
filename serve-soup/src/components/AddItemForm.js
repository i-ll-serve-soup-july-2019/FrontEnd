import React from "react";
import { connect } from "react-redux";

//ReactBootStrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addItem } from "../actions";

class AddItemForm extends React.Component {
  state = {
    //create local state
    itemName: "",
    category: "",
    quantity: 0
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
      category: this.state.category,
      quantity: this.state.quantity
    });
    this.setState({
      itemName: "",
      category: "",
      quantity: 0
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
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input
              type="select"
              name="quantity"
              value={this.state.quantity}
              onChange={this.changeHandler}
            >
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
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
