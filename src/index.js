import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner.js";

//we don't add () to the class , {note to self}
class App extends React.Component {
  //
  //the easy way to define a state{}, babel is smart enough to take care of the rest for us!!
  state = {
    lat: null,
    errMsg: null,
  };

  //a function that's called once the render() method was completed
  componentDidMount() {
    //getting the user's location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //updating the state
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        //displaying the error msg in the state, if found ofcourse
        this.setState({ errMsg: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errMsg) {
      return (
        <div style={{ marginTop: "100px" }}>
          {" "}
          my error is : {this.state.errMsg}
        </div>
      );
    }

    return <Spinner msg="please press OK" />;
  }

  //we use a conditional render here for the different cases!
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
