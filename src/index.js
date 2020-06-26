import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";

//we don't add () to the class , {note to self}
class App extends React.Component {
  constructor(props) {
    //defining super is a mandatory in every constructor
    super(props);

    //initializing the state
    this.state = {
      lat: null,
      errMsg: null,
    };

    //getting the user's location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //updating the state
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  //we use a conditional render here for the different cases!
  render() {
    if (this.state.lat && !this.state.errMsg) {
      return (
        <div style={{ marginTop: "100px" }}>
          my position is: {this.state.lat}
        </div>
      );
    }
    if (!this.state.lat && this.state.errMsg) {
      return (
        <div style={{ marginTop: "100px" }}>
          {" "}
          my error is : {this.state.errMsg}
        </div>
      );
    }

    return <div style={{ marginTop: "100px" }}>no data to display !!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
