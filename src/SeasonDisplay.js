import "./SeasonDisplay.css";

import React from "react";

//a utility function to determine the season
const getSeason = (lat, mon) => {
  if (9 > mon || mon > 2) {
    if (lat > 0) {
      return "summer";
    } else {
      return "winter";
    }
  }

  if (9 > mon || mon > 2) {
    if (lat > 0) {
      return "winter";
    } else {
      return "summer";
    }
  }
};

//we should save the data of the season in an object
const seasonConfig = {
  summer: { text: "Lets hit the beach!", iconName: "sun summer" },
  winter: { text: "Burr, it's chilly!!", iconName: "snowflake ice" },
};

//the main function component
const SeasonDisplay = (props) => {
  //first we determine the season
  const season = getSeason(props.lat, new Date().getMonth());

  //second we set the text
  const text = seasonConfig[season].text;

  //third we get the icon string
  const iconName = seasonConfig[season].iconName;

  //in order to keep the return statement simple, i will make most of the logic in the function itself
  return (
    <div className={"season-display"}>
      <i className={iconName + " icon icon-left massive"} />
      <h1>{text}</h1>
      <i className={iconName + " icon icon-right massive"} />
    </div>
  );
};

export default SeasonDisplay;
