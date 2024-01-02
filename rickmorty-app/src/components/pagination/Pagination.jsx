import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ setPageNumber, pageNumber, info }) => {
  const [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
          }
          .pagination {
            font-size: 12px;
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-2 my-4"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-light next"
        previousClassName="btn btn-light prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        activeclassname="active"
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
