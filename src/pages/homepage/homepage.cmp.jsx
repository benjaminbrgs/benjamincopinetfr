import React from "react";
import { FullPage, Slide } from "react-full-page";
import Hero from "../../components/hero/hero.cmp";
import ItemHome from "../../components/item-home/item-home.cmp";
import "./homepage.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          id: 1,
          title: "Landscape",
          subtitle: "Paysage",
          imageUrl:
            "https://www.api.benjamincopinet.fr/wp-content/uploads/2021/09/landscape1.jpg",
          revield: false,
        },
        {
          id: 2,
          title: "Wildlife",
          subtitle: "Nature",
          imageUrl:
            "https://www.api.benjamincopinet.fr/wp-content/uploads/2020/02/benjamincopinet.fr-Wildlife-2.webp",
          revield: false,
        },
        {
          id: 3,
          title: "Portrait",
          subtitle: "Portrait",
          imageUrl:
            "https://www.api.benjamincopinet.fr/wp-content/uploads/2019/11/benjamincopinet.fr-portraits-002.jpg",
          revield: false,
        },
        {
          id: 4,
          title: "Événementiel",
          subtitle: "Événementiel",
          imageUrl:
            "https://www.api.benjamincopinet.fr/wp-content/uploads/2020/04/benjamincopinet.fr-evenementiel-1.jpg",
          revield: false,
        },
        {
          id: 5,
          title: "Duo",
          subtitle: "Duo",
          imageUrl:
            "https://www.api.benjamincopinet.fr/wp-content/uploads/2021/06/DSC05308-37.jpg",
          revield: false,
        },
      ],
    };
  }

  handleWaypoint = (index, action) => {
    this.setState((state) => {
      const list = state.sections.map((item, i) => {
        if (index === i) {
          if (action === "enter") {
            return (item.revield = true);
          } else if (action === "leave") {
            return (item.revield = false);
          }
        }
        return item;
      });
      return {
        list,
      };
    });
  };

  render() {
    return (
      <FullPage className="fullpage-wrapper">
        <Slide>
          <Hero />
        </Slide>
        {this.state.sections.map((item, index) => (
          <Slide key={item.id}>
            <ItemHome
              item={item}
              handleWaypoint={this.handleWaypoint}
              reviel={this.state.sections}
              index={index}
            />
          </Slide>
        ))}
      </FullPage>
    );
  }
}

export default HomePage;
