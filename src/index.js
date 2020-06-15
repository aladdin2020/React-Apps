import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";

//we don't add () to the class , {note to self}
class App extends React.Component {
  render() {
    //we first get the geolocation of the user
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => {
        console.log(err);
      }
    );
    //those changes were made at the start of ch.04

    return <div></div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
