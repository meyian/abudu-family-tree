import React from "react";
import f3 from "family-chart";
import data from "../data.json";

export default class FamilyTree extends React.Component {
  cont = React.createRef();

  componentDidMount() {
    if (!this.cont.current) return;
    const store = f3.createStore({
        data: data,
        cont: this.cont.current,
        card_display: [
          (d) => `${d.data["first name"]} ${d.data["last name"]}` || "",
          (d) => d.data.birthday || "",
        ],
        mini_tree: true,
        hide_rels: true,
        node_separation: 250,
        level_separation: 150,
        card_dim: {
          w: 220,
          h: 70,
          text_x: 75,
          text_y: 15,
          img_w: 60,
          img_h: 60,
          img_x: 5,
          img_y: 5,
        },
      }),
      view = f3.d3AnimationView(store);

    store.setOnUpdate((props) =>
      view.update({ tree: store.state.tree, ...(props || {}) })
    );
    store.update.tree();
  }

  render() {
    return <div className="family-chart" ref={this.cont}></div>;
  }
}
