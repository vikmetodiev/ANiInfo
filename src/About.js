import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div>
      <Header />
      <Container>
        <p className="neon-text">All About Animes</p>
        <Row>
          <Col>
            <h2 className="mt-3 mb-3">History</h2>
            <h4>
              Animation in Japan began in the early 20th century, when
              filmmakers started to experiment with techniques pioneered in
              France, Germany, the United States, and Russia. A claim for the
              earliest Japanese animation is Katsudō Shashin (c. 1907), a
              private work by an unknown creator. In 1917, the first
              professional and publicly displayed works began to appear;
              animators such as Ōten Shimokawa, Seitarō Kitayama, and Jun'ichi
              Kōuchi (considered the "fathers of anime") produced numerous
              films, the oldest surviving of which is Kōuchi's Namakura Gatana.
              Many early works were lost with the destruction of Shimokawa's
              warehouse in the 1923 Great Kantō earthquake.
            </h4>
          </Col>
          <Col>
            <h2 className="mt-3 mb-3">Attributes</h2>
            <h4>
              Anime differs greatly from other forms of animation by its diverse
              art styles, methods of animation, its production, and its process.
              Visually, anime works exhibit a wide variety of art styles,
              differing between creators, artists, and studios. While no single
              art style predominates anime as a whole, they do share some
              similar attributes in terms of animation technique and character
              design.
            </h4>
          </Col>
        </Row>
        <div className="text-box">
          <h1 style={{ textDecoration: "none" }}>
            The best Anime WebSite in Bulgaria -{" "}
            <a
              href="https://animes-portal.info/"
              rel="noreferrer"
              target="_blank"
            >
              animes-portal
            </a>{" "}
          </h1>
          <h1 style={{ textDecoration: "none" }}>
            The best Anime WebSite in Bulgaria -{" "}
            <a
              href="https://animes-portal.info/"
              rel="noreferrer"
              target="_blank"
            >
              animes-portal
            </a>
          </h1>
        </div>
        <div className="text-box" style={{ textDecoration: "none" }}>
          <h1 style={{ textDecoration: "none" }}>
            The best Anime WebSites on the web -{" "}
            <a
              href="https://www.makeuseof.com/tag/the-best-anime-spots-online/"
              rel="noreferrer"
              target="_blank"
            >
              makeuseof.com
            </a>
          </h1>
          <h1 style={{ textDecoration: "none" }}>
            The best Anime WebSites on the web -{" "}
            <a
              href="https://www.makeuseof.com/tag/the-best-anime-spots-online/"
              rel="noreferrer"
              target="_blank"
            >
              makeuseof.com
            </a>
          </h1>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
