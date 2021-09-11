import React from "react";
import { FullPage, Slide } from "react-full-page";
import Hero from "../../components/hero/hero.cmp";
import ItemHome from "../../components/item-home/item-home.cmp";
import "./homepage.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galeries: [],
    };
  }

  componentDidMount() {
    return fetch("https://www.api.benjamincopinet.fr/wp-json/wp/v2/galerie")
      .then((response) => response.json())
      .then((data) => {
        const galeries = data.map((galerie) => {
          return {
            id: galerie.id,
            title: galerie.title.rendered,
            subtitle: galerie.title.rendered,
            imageUrl: galerie.acf.image_mise_en_avant,
            revield: false,
          };
        });
        this.setState({
          galeries: galeries,
        });
      });
  }

  handleWaypoint = (index, action) => {
    this.setState((state) => {
      const list = state.galeries.map((item, i) => {
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
        {this.state.galeries.map((item, index) => (
          <Slide key={item.id}>
            <ItemHome
              item={item}
              handleWaypoint={this.handleWaypoint}
              reviel={this.state.galeries}
              index={index}
            />
          </Slide>
        ))}
      </FullPage>
    );
  }
}

export default HomePage;
