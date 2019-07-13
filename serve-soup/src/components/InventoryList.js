import React from "react";

//importing reactstrap components
import { ListGroup, ListGroupItem } from "reactstrap";

//importing connect
import { connect } from "react-redux";

class InventoryList extends React.Component {
  //state is only for testing
  //use mapStateToProps when available
  state = {
    items: [
      {
        name: "Yellow onions"
      },
      {
        name: "Potatos"
      },
      {
        name: "Whole Milk"
      }
    ]
  };
  render() {
    return (
      <div className="inventory-list-container">
        <h2>Inventory List</h2>
        {this.state.items.map(item => (
          <ListGroup>
            <ListGroupItem>
              <div className="inventory-list-items">
                {/* select button and item name  container*/}
                <div>
                  <i className="far fa-circle" />

                  {item.name}
                </div>
                {/* edit and delete buttons container*/}
                <div>
                  <i className="far fa-edit" />

                  <i className="far fa-trash-alt" />
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
  {}
)(InventoryList);
