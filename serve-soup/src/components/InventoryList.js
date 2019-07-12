import React from "react";

//implementing routing
import { Link } from "react-router-dom";

class InventoryList extends React.Component {
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
      <div>
        <h2>Inventory List</h2>
        <Link to="/addItem">Add</Link>
        {this.state.items.map(item => (
          <h4>{item.name}</h4>
        ))}
      </div>
    );
  }
}

export default InventoryList;
