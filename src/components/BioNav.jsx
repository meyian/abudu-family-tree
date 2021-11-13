import { kebabCase } from "../config/lib";

const BioNav = ({ people, render, columns = 3 }) => {
  const renderedPeople = people.map((person) => (
    <li key={kebabCase(person.name)} style={{ listStyleType: "square" }}>
      {render(person)}
    </li>
  ));

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "35px",
        margin: `${columns === 2 ? null : "0 2rem"}`,
        padding: `${columns === 2 ? "1rem 1rem" : "1.5rem 1rem"}`,
        border: "1px solid #eee",
      }}
    >
      <ul
        style={{
          marginLeft: `${columns === 2 ? null : "1.5rem"}`,
          display: "grid",
          gridTemplateRows: `repeat(${columns === 2 ? 15 : 10}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridAutoFlow: "column",
          gridGap: "10px 30px",
        }}
      >
        {renderedPeople}
      </ul>
    </div>
  );
};

export default BioNav;
