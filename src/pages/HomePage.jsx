import React from "react";
import Title from "../shared_components/Title";

const HomePage = () => {
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

export default HomePage;
