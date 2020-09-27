import React from "react";
import HomepageHeader from "./components/HomepageHeader";
import HomepageContainer from "./components/HomepageContainer";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
          <HomepageHeader />
          <HomepageContainer />
      </div>
    );
  }
}

export default App;
