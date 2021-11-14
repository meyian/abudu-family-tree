import bioData from "../data/bios.json";
import Title from "../shared_components/Title";
import BioNav from "../components/BioNav";
import { kebabCase } from "../config/lib";

import LazyLoad from "react-lazyload";

const defaultAvatarSrc = "./imgs/bio-page/default_avatar.jpg";

const BioPage = () => {
  return (
    <div>
      <Title style={{ margin: "0 rem", textAlign: "center" }}>
        Family Members
      </Title>
    </div>
  );
};

export default BioPage;
