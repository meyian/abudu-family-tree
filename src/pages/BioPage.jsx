import bioData from "../data/bios.json";
import Title from "../shared_components/Title";
import BioNav from "../components/BioNav";
import settings from "../config/variables";
import { createMedia } from "@artsy/fresnel";

import { LazyLoadImage } from "react-lazy-load-image-component";

const defaultAvatarSrc = "./imgs/bio-page/default_avatar.jpg";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: settings.breakpoints,
});

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

      <MediaContextProvider>
        <Media at="sm">
          <BioNav
            columns={2}
            people={sortedBioData}
            render={(person) => (
              <li style={{ listStyleType: "square" }}>
                <a
                  className="unstyled-link"
                  href={`#${kebabCase(person.name)}`}
                >
                  {person.name}
                </a>
              </li>
            )}
          />
        </Media>
        <Media greaterThanOrEqual="md">
          <BioNav
            people={sortedBioData}
            columns={3}
            render={(person) => (
              <li style={{ listStyleType: "square" }}>
                <a
                  className="unstyled-link"
                  href={`#${kebabCase(person.name)}`}
                >
                  {person.name}
                </a>
              </li>
            )}
          />
        </Media>
      </MediaContextProvider>

      <div>
        <ul style={{ padding: 0, marginBottom: "4rem" }}>
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
                <LazyLoadImage
                  id={kebabCase(bioObj.name)}
                  height={bioObj.img_src.height || defaultAvatarSrc.height}
                  width={bioObj.img_src.width || defaultAvatarSrc.width}
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
