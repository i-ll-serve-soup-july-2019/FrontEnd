import React from "react";

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
          <ul>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}

//create mapStateToProps

//Remember to use connect
export default InventoryList;
