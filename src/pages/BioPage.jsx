import bioData from "../data/bios.json";
import Title from "../shared_components/Title";
import BioNav from "../components/BioNav";

const defaultAvatarSrc = "./imgs/bio-page/default_avatar.jpg";

const BioPage = () => {
  return (
    <div>
      <Title style={{ margin: "0 rem", textAlign: "center" }}>
        Family Members
      </Title>
      {
        <BioNav
          people={bioData}
          render={(person) => (
            <li>
              <a className="unstyled-link" href="#">
                {person.name}
              </a>
            </li>
          )}
        />
      }
      <div>
        <ul style={{ padding: 0 }}>
          {bioData.map((bioObj) => (
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
      </div>
    </div>
  );
};

export default BioPage;
