import React from "react";

const Spinner = (props) => {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui text loader">{props.msg}</div>
      </div>
      <p></p>
    </div>
  );
};

Spinner.defaultProps = {
  msg: "Loading NOW ...",
};

export default Spinner;
