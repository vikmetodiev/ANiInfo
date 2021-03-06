import React, { useEffect, useState } from "react";
import { Container, Col, Row, Input, Button } from "reactstrap";
import axios from "axios";
import Anime from "./Anime.js";
import Footer from "./Footer";
import Header from "./Header";
const AnimeList = () => {
  const [data, getData] = useState();
  const [paggination, setPaggination] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${
          paggination * 12
        }`
      )
      .then((response) => {
        getData(response?.data?.data);
        setLoaded(true);
      });
  }, [paggination]);

  const nextPage = () => {
    setLoaded(true);
    setPaggination(paggination + 1);
  };

  const previousPage = () => {
    if (paggination > 0) {
      setLoaded(true);
      setPaggination(paggination - 1);
    }
  };

  const returnData = () => {
    axios
      .get(
        `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${
          paggination * 12
        }`
      )
      .then((response) => {
        getData(response?.data?.data);
      });
  };

  const dataCollector = () => {
    if (query.length > 0) {
      axios
        .get(`https://kitsu.io/api/edge/anime?filter[text]=` + query)
        .then((response) => {
          getData(response?.data?.data);
        });
    }
  };

  let anime = data?.map((item) => {
    return (
      <Col sm="4" key={item.id}>
        {" "}
        <Anime item={item} />
      </Col>
    );
  });
  if (loaded) {
    return (
      <div>
        <Header />
        <Container>
          <div className="neon-text">Animes</div>
          <div className="d-inline-flex">
            <Input
              type="email"
              name="email"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search for animes"
            />

            <Button onClick={() => dataCollector()} className="ml-2 beta-btn">
              Search
            </Button>
            <Button
              onClick={() => returnData()}
              className="ml-2 beta-btn"
              style={{ width: "-webkit-fill-available" }}
            >
              Return All Data
            </Button>
          </div>
          <Row>{anime}</Row>
          {paggination > 0 && (
            <div
              className="arrow-up"
              style={{ left: "10%" }}
              onClick={() => previousPage()}
            >
              <span className="left-arm"></span>
              <span className="right-arm"></span>
              <span className="arrow-slide"></span>
            </div>
          )}
          <div
            className="arrow-up"
            style={{ transform: "rotate(90deg)", right: "10%" }}
            onClick={() => nextPage()}
          >
            <span className="left-arm"></span>
            <span className="right-arm"></span>
            <span className="arrow-slide"></span>
          </div>
        </Container>
        <Footer />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AnimeList;
