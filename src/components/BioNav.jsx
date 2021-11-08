/*

* Make an island:
  - wide
  - narraw
* Pass in the rendering function as a prop, so that we can link to the 
* 

*/

const BioNav = ({ people, render }) => {
  const renderedPeople = people.map((person) => render(person));

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "35px",
        margin: "0 2rem",
        padding: "1.5rem 1rem",
        border: "1px solid #eee",
      }}
    >
      <ul
        style={{
          marginLeft: "2rem",
          display: "grid",
          gridTemplateRows: "repeat(10, 1fr)",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoFlow: "column",
        }}
      >
        {renderedPeople}
      </ul>
    </div>
  );
};

export default BioNav;
