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
    return (
      <div>
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
