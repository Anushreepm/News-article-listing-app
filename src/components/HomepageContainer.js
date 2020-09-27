import React from "react";
import { useHistory } from "react-router-dom";

function HomepageContainer() {
  const history = useHistory();
  return (
    <div className="homepage-container">
      <div className="home-container-text">
        Welcome to our News App, Select language below!
      </div>
      <div className="home-container-body">
        <div
          className="home-container-block"
          onClick={(e) => history.push("/english")}
        >
          English
        </div>
        <div
          className="home-container-block"
          onClick={(e) => history.push("/hindi")}
        >
          Hindi
        </div>
        <div
          className="home-container-block"
          onClick={(e) => history.push("/telugu")}
        >
          Telugu
        </div>
      </div>
    </div>
  );
}

export default HomepageContainer;
