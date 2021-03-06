import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notFound from "./Images/notFound.png";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="text-center" >
        <img
          className="my-4"
          style={{ width: "52%" }}
          src={notFound}
          alt="Error 404"
        />
        <h4 className="mb-5">The Page you were looking for was not found</h4>
        <a href="/" className=" d-inline-block" style={{ cursor: "pointer" }}>
          &#8592; Back to Home Page
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
