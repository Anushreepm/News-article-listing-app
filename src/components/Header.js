import React from "react";
import { useHistory } from "react-router-dom";

function Header(props) {
  const { commonProps } = props;
  const { fetchTopic } = commonProps;
  const history = useHistory();
  return (
    <div className="main-header">
      <div className="header-block" onClick={(e) => fetchTopic("world")}>
        World
      </div>
      <div className="header-block" onClick={(e) => fetchTopic("business")}>
        Business
      </div>
      <div className="header-block" onClick={(e) => fetchTopic("technology")}>
        Technology
      </div>
    </div>
  );
}

export default Header;
