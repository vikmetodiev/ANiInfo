import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);
const Anime = ({ item }) => {
  return (
    <div className="m-3 card-item">
      <Link to={"./Anime/" + item.attributes.slug}>
        <Card className="gradient-border" >
          <CardImg
            className="anime-image"
            top
            src={item.attributes.posterImage?.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="anime-description">
              {item.attributes.titles.en_jp}
            </CardTitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted anime-description"
            >
              {item.attributes.titles.ja_jp}
            </CardSubtitle>
            <CardText className="anime-description">
              Rating: {item.attributes.averageRating}
            </CardText>
            <StyledRating
              readOnly
              name="read-only"
              defaultValue={item.attributes.averageRating / 10}
              precision={0.5}
              max={10}
              icon={<FavoriteIcon fontSize="inherit" />}
            />
            <br />
            <div href="#" className="read-more">
              Click to learn more
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Anime;
