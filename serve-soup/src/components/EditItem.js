import React from "react";
import { connect } from "react-redux";

//ReactBootStrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditItem extends React.Component {
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

  updateHandler = e => {
    e.preventDefault();
    // console.log("Category:", this.state.category);
    // this.props.addItem({
    //   name: this.state.itemName,
    //   category: this.state.category,
    //   quantity: this.state.quantity
    // });
    this.setState({
      itemName: "",
      category: "",
      quantity: 0
    });
  };

  render() {
    return (
      <div className="add-item-container">
        <h2>Edit item</h2>
        {this.props.inventoryItems.map((item, index) => {
          //Get the id from the url
          const selectedItem = this.props.match.params.item;
          //console.log("Selected ID to update", selectedItem);
          //index converted to string to correctly match the params
          //return the matching item to be updated
          if (`${index}` === selectedItem) {
            return (
              <Form onSubmit={this.updateHandler}>
                <FormGroup>
                  <Label for="Item Name">Item Name</Label>
                  <Input
                    type="text"
                    name="itemName"
                    placeholder="Item Name"
                    value={item.name}
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category">Category</Label>
                  <Input
                    type="select"
                    name="category"
                    value={item.category}
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
                    value={item.quantity}
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
            );
          }
        })}
      </div>
    );
  }
}
//create mapStateToProps
const mapStateToProps = state => {
  return {
    inventoryItems: state.inventoryItems
  };
};

//use connect
export default connect(
  mapStateToProps,
  {}
)(EditItem);
