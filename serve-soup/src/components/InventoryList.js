import React from "react";

import { Link } from "react-router-dom";

class InventoryList extends React.Component {
  render() {
    return (
      <div>
        <h2>InventoryList</h2>
        <Link to="/addItem">Add</Link>
      </div>
    );
  }
}

export default InventoryList;
