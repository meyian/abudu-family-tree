import React from "react";
import "./css/styles.css";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";

import FamilyChart from "./pages/FamilyTreePage";
import BioPage from "./pages/BioPage";
import AboutPage from "./pages/AboutPage";
import PollPage from "./pages/PollPage";
import HomePage from "./pages/HomePage";

import Title from "./shared_components/Title";
import settings from "./config/variables";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: settings.breakpoints,
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

const HASURA_ADMIN_SECRET = process.env.REACT_APP_HASURA_SECRET;

const createApolloClient = (authToken) => {
  console.table({ authToken });
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://abu-ata-family-site.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret": authToken,
        // Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });
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
        <li key={linkObj.name} style={listItemStyle}>
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

export default function App() {
  const client = createApolloClient(HASURA_ADMIN_SECRET);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
        </div>
        <Switch>
          {links.map((linkObj) => {
            return (
              <Route key={linkObj.url} path={linkObj.url}>
                {linkObj.component}
              </Route>
            );
          })}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

/*

nW4J0djTpfTLZ3uUlle7obIqLx0Deiy0JT6EQweUdbWMhRckCww36nAEWhPfpeMz

*/
