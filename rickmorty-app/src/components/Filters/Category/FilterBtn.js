import React from "react";

const FilterBtn = ({ name, index, x, task,setPageNumber }) => {
  return (
    <div>
      <style jsx>
      {`
        .x:checked + label{
          background-color: #0b5ed7;
          color: white;
        }
        input[type="radio"]{
          display: none;
        }
      `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(x);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {x}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
