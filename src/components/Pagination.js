import React from "react";
import Pagination from "@material-ui/lab/Pagination";

function pagination(props) {
  const { commonProps } = props;
  const { state } = commonProps;
  const pageCount =
    state.totalArticles % 20 === 0
      ? state.totalArticles % 20
      : Math.ceil(state.totalArticles / 20);
  return (
    <div className="pagination-block">
      <Pagination count={pageCount} shape="rounded" />
    </div>
  );
}

export default pagination;
