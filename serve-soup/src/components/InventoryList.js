import React from "react";

//importing reactstrap components
import { Table, Badge } from "reactstrap";

//importing connect
import { connect } from "react-redux";

//Importing deleteitem from actions
import { deleteItem } from "../actions";

//importing link from react-router-dom to redirect when the edit button is pressed
import { Link } from "react-router-dom";

class InventoryList extends React.Component {
  deleteHandler = index => {
    console.log("Index to delete:", index);
    this.props.deleteItem(index);
  };

  render() {
    return (
      <div className="inventory-list-container">
        <h2>Inventory List</h2>

        <Table>
          <thead>
            <tr>
              <th>
                <strong>Quantity</strong>
              </th>
              <th>
                <strong>Item Name</strong>
              </th>
              <th>
                <strong>Category</strong>
              </th>
              <th>
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          {this.props.inventoryItems.map((item, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">
                  <Badge
                    pill
                    /* This will color the quantity pill based on the 
                    current ammount if is less than 5 will show color yellow and if less than 3 red
                     */
                    color={`${
                      item.quantity > 3
                        ? item.quantity > 5
                          ? ""
                          : "warning"
                        : "danger"
                    }`}
                  >
                    {item.quantity}
                  </Badge>
                </th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <Link to={`/protected/edititem/${index}`}>
                    <i className="far fa-edit" />
                  </Link>
                  <i
                    onClick={() => this.deleteHandler(index)}
                    className="far fa-trash-alt"
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
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

//Remember to use connect
export default connect(
  mapStateToProps,
  { deleteItem }
)(InventoryList);
