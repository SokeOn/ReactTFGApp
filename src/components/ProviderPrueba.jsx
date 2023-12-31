import React from "react";
import styles from "./MainCard.css";
import Steam from "../global/Steam.png";
import { useNavigate } from "react-router-dom";

function MyComponent(props) {
  return (
    <div className="row mx-5 mb-2 px-5 d-flex justify-content-center">
      <div className="col-8" style={{ backgroundColor: "white" }}>
        <a
          href={"https://" + props.link}
          style={{ textDecoration: "None", color: "black" }}
        >
          <div className="row d-flex">
            <div className="col my-4 px-3">
              <img src={props.image} style={{ height: "2vh" }} />
            </div>
            <div className="col px-5 d-flex align-items-center">
              {/* HAY QUE HACER QUE EL TEXTO SE AJUSTE CON EL WRAP, NO VA */}
              <p
                className="m-0"
                style={{ fontSize: "1vw", wordWrap: "break-word" }}
              >
                {props.title}
              </p>
            </div>
            <div className="col px-5 d-flex align-items-center">
              <img src={Steam} style={{ height: "5vh" }} />
            </div>
            <div className="col px-5 d-flex align-items-center justify-content-end">
              <p
                className="m-0"
                style={{ fontSize: "2vw", fontWeight: "bold" }}
              >
                {props.price}€
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MyComponent;
