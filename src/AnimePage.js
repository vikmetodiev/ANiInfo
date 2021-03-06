import React, { useEffect, useState } from "react";
import { CardImg, Container, Row, Col } from "reactstrap";
import axios from "axios";

import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";
const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);
const AnimePage = ({ id }) => {
  const [data, getData] = useState();

  useEffect(() => {
    let path = window.location.href.split("/");
    path = path[path.length - 1];
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[slug]=` + path)
      .then((response) => {
        getData(response?.data?.data);
      });
  }, []);
  if (data) {
    console.log(data);
    return (
      <div>
        <Header />
        <Container>

        <div className="text-box">
        <h1>{data[0].attributes.canonicalTitle}</h1>
        <h1>{data[0].attributes.canonicalTitle}</h1>
        </div>
          <Row>
            <Col>
              <CardImg
                className="anime-image-page"
                top
                src={
                  data[0].attributes.coverImage
                    ? data[0].attributes.coverImage.original
                    : data[0].attributes.posterImage?.large
                }
                alt="Card image cap"
              />
              <span className="mt-2 mr-1 float-left">
                Rating: {data[0].attributes.averageRating}{" "}
              </span>
              <StyledRating
                className="mt-2 mr-1 float-left"
                readOnly
                name="read-only"
                defaultValue={data[0].attributes.averageRating / 10}
                precision={0.5}
                max={10}
                icon={<FavoriteIcon fontSize="inherit" />}
              />
              <h3 className="mt-2 mr-1 float-left">
                {data[0].attributes.startDate === data[0].attributes.endDate
                  ? "Released: " + data[0].attributes.startDate
                  : "From:  " +
                    data[0].attributes.startDate + 
                    " - Till: " +
                    data[0].attributes.endDate}
              </h3>
              <h3 className="mt-2 mr-1 float-left">
                {" "}
                Age Rating : {data[0].attributes.ageRatingGuide}
              </h3>
            </Col>
            <Col>
              <h2 className="mb-3">Description: </h2>{" "}
              <h4>{data[0].attributes.description} </h4>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AnimePage;
