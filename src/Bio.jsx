import bioData from "./data/bios.json";

const BioPage = () => {
  return (
    <div>
      <h1 style={{ margin: "0 rem", textAlign: "center" }}>
        Family Biographies
      </h1>
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
              <div>
                <img
                  className="bio-page__image"
                  alt={`${bioObj.name}`}
                  src={bioObj.img_src}
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
