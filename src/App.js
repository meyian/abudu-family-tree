import React from "react";
import "./css/styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";

import FamilyChart from "./FamilyChart";
import BioPage from "./Bio";
import AboutPage from "./AboutPage";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 426,
    lg: 1024,
    xl: 1192,
  },
});

const linkStyle = {
  textDecoration: "none",
};

const FamilyTreePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Helvetica" }}>
        The Abudu Family Tree
      </h1>
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
    name: "Biographies",
    url: "/bios",
    component: <BioPage />,
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
          <Link to="/" style={linkStyle}>
            A/A Family
          </Link>
          <nav>
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
            <Link to="/" style={linkStyle}>
              A/A Family
            </Link>
            <nav style={{ display: "inline-block" }}>
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
      <h1 style={{ margin: "0 2rem" }}>The Abudu/Atampugre Family Website</h1>
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
