import React from "react";
import styles from "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, location, image, status } = x;
      return (
        <Link 
        style={{ textDecoration: "none"}}
        to={`${page}${id}`}
        key={id} className={`col-lg-4 col-md-6 col-12 position-relative mt-5 cursive`}>
          <div className="cards bg-light flex-column d-flex justify-content-center ">
            <img src={image} className="img-fluid img p-3" alt="images" />
            <div className="content mb-2 p-2">
              <div className="fs-4 fw-bold text-black">{name}</div>
              <div className="">
                <div className="fs-6 text-black">
                  Last Location:{location.name}
                </div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "Uh-Oh, No Characters Found :/";
  }

  return <div className="text-white row">{display}</div>;
};

export default Card;
