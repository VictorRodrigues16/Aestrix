import {} from "react";
import { Link } from "react-router-dom";
import errorMsg from "../assets/errorMsg.svg";
import "../styles/Error.scss";

export default function Error() {
  return (
    <>
      <section className="format-page">
        <img src={errorMsg} alt="errorMsg" />
        <h1>404 - PAGE NOT FOUND... PLEASE TRY AGAIN!</h1>
        <Link to="/" className="return-btn">
          {" "}
          RETURN TO HOME{" "}
        </Link>
      </section>
    </>
  );
}
