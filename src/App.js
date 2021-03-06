import "./App.scss";
import { Switch, Route, withRouter } from "react-router-dom";
import React from "react";
import AnimesList from "./AnimeList";
import HomePage from "./HomePage";
import AnimePage from "./AnimePage";
import NotFound from "./NotFound";
import About from "./About";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="" data-react-helmet="true" />
        <meta
          name="keywords"
          data-react-helmet="true"
          property="og:title"
          content="ANiInfo"
        />
        <meta
          property="og:description"
          content="ANiInfo strives to achieve the best quality and greatest amount of information on all animes"
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://ANiInfo.com/"
          data-react-helmet="true"
        />
        <meta
          property="og:image"
          content="../src/Images/otaku.png"
          data-react-helmet="true"
        />
        <meta
          property="twitter:description"
          content="ANiInfo strives to achieve the best quality and greatest amount of information on all animes"
          data-react-helmet="true"
        />
      </Helmet>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/Anime/:id" component={() => <AnimePage />} />
        <Route path="/Animes" component={() => <AnimesList />} />
        <Route path="/About" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
