import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: 1, color: "red" },
        { id: 2, color: "yellow" },
        { id: 3, color: "green" },
        { id: 4, color: "blue" },
        { id: 5, color: "black" },
        { id: 6, color: "brown" },
        { id: 8, color: "grey" },
        { id: 9, color: "pink" },
        { id: 10, color: "purple" },
        { id: 11, color: "red" },
        { id: 12, color: "yellow" },
        { id: 13, color: "green" },
        { id: 14, color: "blue" },
        { id: 15, color: "black" },
        { id: 16, color: "brown" },
        { id: 18, color: "grey" },
        { id: 19, color: "pink" },
        { id: 20, color: "purple" }
      ],
      start: false,
      selected: {
        id: 0,
        color: "",
        isTrue: false
      },
      selects: []
    };

    this.handleSelectCard = this.handleSelectCard.bind(this);
  }

  handleSelectCard(item) {
    this.setState({
      selected: {
        id: item.id,
        color: item.color,
        isTrue: true
      }
    });
  }

  render() {
    const stylesVisible = color => {
      return {
        backgroundColor: color,
        width: 100,
        height: 100,
        marginLeft: 10,
        marginRight: 10
      };
    };

    const stylesOffVisible = item => {
      return {
        backgroundColor: "#cecece",
        width: 100,
        height: 100,
        marginLeft: 10,
        marginRight: 10
      };
    };
    const cards = this.state.cards.map(item => (
      <div
        keys={item.id}
        onClick={() => this.handleSelectCard(item)}
        style={
          this.state.start
            ? stylesVisible(item.color)
            : stylesOffVisible(item.color)
        }
      >
        {this.state.selected.isTrue && item.id === this.state.selected.id ? (
          <div
            style={{
              backgroundColor: item.color,
              width: 70,
              height: 70,
              margin: "auto"
            }}
          />
        ) : null}
      </div>
    ));
    return <div className="main">{cards}</div>;
  }
}

export default App;
