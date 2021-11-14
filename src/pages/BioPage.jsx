import bioData from "../data/bios.json";
import Title from "../shared_components/Title";
import BioNav from "../components/BioNav";
import settings from "../config/variables";
import { createMedia } from "@artsy/fresnel";
import { kebabCase } from "../config/lib";

import LazyLoad from "react-lazyload";

const defaultAvatarSrc = "./imgs/bio-page/default_avatar.jpg";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: settings.breakpoints,
});

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
              <a className="unstyled-link" href={`#${kebabCase(person.name)}`}>
                {person.name}
              </a>
            )}
          />
        </Media>
        <Media greaterThanOrEqual="md">
          <BioNav
            people={sortedBioData}
            columns={3}
            render={(person) => (
              <a className="unstyled-link" href={`#${kebabCase(person.name)}`}>
                {person.name}
              </a>
            )}
          />
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default BioPage;
