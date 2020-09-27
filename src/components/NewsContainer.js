import React from "react";
import NewsCards from "./NewsCards";
import Pagination from "./Pagination";
import SearchNews from "./searchNews";

function NewsContainer(props) {
  const { commonProps } = props;
  return (
    <div className="news-container">
      <Pagination commonProps={commonProps} />
      <SearchNews commonProps={commonProps} />
      <NewsCards commonProps={commonProps} />
    </div>
  );
}

export default NewsContainer;
