import React from "react";

//importing components
import AddItemForm from "./AddItemForm";
import InventoryList from "./InventoryList";
import NavBar from "./NavBar";

//implementing routing
import { Route } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={InventoryList} />
        <Route path="/addItem" component={AddItemForm} />
      </div>
    );
  }
}

export default HomePage;