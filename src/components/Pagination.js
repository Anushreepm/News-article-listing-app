import React from "react";
import Pagination from "@material-ui/lab/Pagination";

function pagination(props) {
  const { commonProps } = props;
  const { state, setPages } = commonProps;
  const pageCount = Math.ceil(state.totalArticles / 3);

  const setPagination = (e,v) => {
    setPages(v);
  }

  return (
    <div className="pagination-block">
      <Pagination count={pageCount} onChange = {(e,v) => setPagination(e,v)} shape="rounded" />
    </div>
  );
}

export default pagination;
