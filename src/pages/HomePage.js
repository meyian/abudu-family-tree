import React from "react";
import "../css/styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";

import FamilyChart from "./FamilyTreePage";
import BioPage from "./BioPage";
import AboutPage from "./AboutPage";
import PollPage from "./PollPage";
import Title from "../shared_components/Title";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 426,
    lg: 1024,
    xl: 1192,
  },
});

const logo = "A /A Family";

const linkStyle = {
  textDecoration: "none",
  fontWeight: 700,
  color: "#727236",
};

const logoStyle = {
  color: "#58336C",
  fontSize: "1.3rem",
  fontFamily: "'Zen Antique', serif",
};

const FamilyTreePage = () => {
  return (
    <div>
      <Title
        style={{ ...logoStyle, textAlign: "center", fontFamily: "Helvetica" }}
      >
        The Abudu Family Tree
      </Title>
      <FamilyChart />
    </div>
  );
};

const links = [
  {
    name: "Family Tree",
    url: "/family-tree",
    component: <FamilyTreePage />,
  },
  {
    name: "Members",
    url: "/bios",
    component: <BioPage />,
  },
  {
    name: "Poll",
    url: "/poll",
    component: <PollPage />,
  },
  {
    name: "About Us",
    url: "/about",
    component: <AboutPage />,
  },
];

const Header = () => {
  const mobileListStyle = {
    display: "inline-block",
    borderTop: "1px dotted #ccc",
    width: "100%",
    margin: "0.3rem 0",
    padding: "0.4rem 0",
    borderBottom: "1px dotted #ccc",
  };

  const listItems = (style) =>
    links.map((linkObj) => {
      const listItemStyle =
        style === "inline"
          ? { display: "inline-block", marginLeft: "1rem" }
          : { marginLeft: "2rem" };

      return (
        <li style={listItemStyle}>
          <Link to={linkObj.url} style={linkStyle}>
            {linkObj.name}
          </Link>
        </li>
      );
    });
  return (
    <header style={{ marginBottom: "1.5rem" }}>
      <MediaContextProvider>
        <Media at="sm">
          <Link to="/" style={{ ...linkStyle, ...logoStyle }}>
            {logo}
          </Link>
          <nav style={{ marginRight: "0.5rem" }}>
            <ul style={mobileListStyle}>{listItems()}</ul>
          </nav>
        </Media>
        <Media greaterThanOrEqual="md">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link to="/" style={{ ...linkStyle, ...logoStyle }}>
              {logo}
            </Link>
            <nav style={{ display: "inline-block", marginRight: "0.5rem" }}>
              <ul style={{ display: "inline-block", margin: "0" }}>
                {listItems("inline")}
              </ul>
            </nav>
          </div>
        </Media>
      </MediaContextProvider>
    </header>
  );
};

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Title style={{ margin: "0 2rem" }}>
        The Abudu/Atampugre Family Website
      </Title>
      <p style={{ maxWidth: "750px", margin: "1rem" }}>
        Welcome to our family website. Here you will find our family tree and
        biographies of our family members.
      </p>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        {links.map((linkObj) => {
          return <Route path={linkObj.url}>{linkObj.component}</Route>;
        })}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
