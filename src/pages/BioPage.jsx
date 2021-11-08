import bioData from "../data/bios.json";
import Title from "../shared_components/Title";
import BioNav from "../components/BioNav";

const defaultAvatarSrc = "./imgs/bio-page/default_avatar.jpg";

const kebabCase = (string) => {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const BioPage = () => {
  const sortedBioData = bioData.sort((a, b) => {
    const aLastName = a.name.split(" ").at(-1);
    const bLastName = b.name.split(" ").at(-1);

    return aLastName > bLastName ? 1 : bLastName > aLastName ? -1 : 0;
  });

  return (
    <div>
      <Title style={{ margin: "0 rem", textAlign: "center" }}>
        Family Members
      </Title>
      {
        <BioNav
          people={sortedBioData}
          render={(person) => (
            <li>
              <a className="unstyled-link" href={`#${kebabCase(person.name)}`}>
                {person.name}
              </a>
            </li>
          )}
        />
      }
      <div>
        <ul style={{ padding: 0 }}>
          {sortedBioData.map((bioObj) => (
            <li
              className="bio-page__people-list-item"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ paddingTop: "30px" }}>
                <img
                  id={kebabCase(bioObj.name)}
                  className="bio-page__image"
                  alt={`${bioObj.name}`}
                  src={bioObj.img_src || defaultAvatarSrc}
                  style={
                    bioObj.img_src
                      ? {}
                      : { border: "2px solid #000", borderRadius: "9px" }
                  }
                />
              </div>
              <div style={{ marginTop: "1rem" }} className="bio-page__bio">
                {bioObj.bio}
              </div>
            </li>
          ))}
        </ul>
        <div style={{ margin: "3rem" }}></div>
        <div
          style={{
            position: "fixed",
            bottom: "0",
            padding: "1rem 0",
            width: "100vw",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => {
              window.location.href = "#top";
            }}
            style={{ padding: "0.2rem 1.4rem" }}
          >
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
