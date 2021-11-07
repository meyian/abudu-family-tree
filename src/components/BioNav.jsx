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
      }}
    >
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(auto-fill)",
        }}
      >
        {renderedPeople}
      </ul>
    </div>
  );
};

export default BioNav;
