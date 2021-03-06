import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "reactstrap";
import AnimeGalery from "./AnimeGalery";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
      <p className="neon-text">If you have any interest in Animes or you have always wanted to learn something new in that area, you are exactly at the right place</p>
        <h2 className="mt-3 mb-3">What is an anime?</h2>
        <h4>
          Anime (pronounced AH-nee-may ) is a term for a style of Japanese comic
          book and video cartoon animation in which the main characters have
          large doe-like eyes. Many Web sites are devoted to anime. Anime is the
          prevalent style in Japanese comic books or manga . In Japan, the comic
          book is a popular form of entertainment for adults as well as for
          younger audiences. Story lines are often very sophisticated and
          complex and extend into episodic series. Typical anime themes or
          genres include Ninja and other martial arts; the supernatural or
          horror story; the romance; and science fiction including robots and
          space ships. Foils for the main characters, including robots,
          monsters, or just plain bad people, often lack the doe-eyed quality.
        </h4>
        <div className="text-box">
          <h1>Here are few of the most famous Animes of all time </h1>
          <h1>Here are few of the most famous Animes of all time </h1>
        </div>
        <AnimeGalery />
        <a href="/Animes" className="anime-link">Click here to see all the Anime content we can provide you with</a>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
