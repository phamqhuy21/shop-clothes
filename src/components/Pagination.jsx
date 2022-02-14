/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function Pagination(props) {
  const { total, pageSize } = props;
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {}, [total]);

  return (
    <div className="pagination pagination-small pagination-centered">
      <ul>
        <li>
          <a href="#">Prev</a>
        </li>
        {Array.from(Array(Math.ceil(total / pageSize)).keys()).map((page) => (
          <li className={`${currentPage === page + 1 && "active"}`} key={page}>
            <a href="#">{page + 1}</a>
          </li>
        ))}

        <li>
          <a href="#">Next</a>
        </li>
      </ul>
    </div>
  );
}
