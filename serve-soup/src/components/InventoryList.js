import React from "react";

//importing reactstrap components
import { ListGroup, ListGroupItem } from "reactstrap";

//importing connect
import { connect } from "react-redux";

import { deleteItem } from "../actions";

class InventoryList extends React.Component {
  //state is only for testing
  //use mapStateToProps when available
  state = {};

  deleteHandler = index => {
    console.log("Index to delete:", index);
    this.props.deleteItem(index);
  };

  render() {
    return (
      <div className="inventory-list-container">
        <h2>Inventory List</h2>
        {this.props.inventoryItems.map((item, index) => (
          <ListGroup key={index}>
            <ListGroupItem>
              <div className="inventory-list-items">
                {/* select button and item name  container*/}
                <div>
                  <i className="far fa-circle" />

                  <strong>{item.name} </strong>
                  <sup> {item.category}</sup>
                </div>
                {/* edit and delete buttons container*/}
                <div>
                  <i className="far fa-edit" />

                  <i
                    onClick={() => this.deleteHandler(index)}
                    className="far fa-trash-alt"
                  />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        ))}
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
