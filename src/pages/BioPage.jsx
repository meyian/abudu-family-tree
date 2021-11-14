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

      {window.innerWidth <= 426 ? <h2>Small</h2> : <h2>Full Page</h2>}
    </div>
  );
};

export default BioPage;
