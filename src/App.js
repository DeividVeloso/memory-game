import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: 1, color: "red", visible: false, match: false },
        { id: 2, color: "yellow", visible: false, match: false },
        { id: 3, color: "green", visible: false, match: false },
        { id: 4, color: "blue", visible: false, match: false },
        { id: 5, color: "black", visible: false, match: false },
        { id: 6, color: "brown", visible: false, match: false },
        { id: 8, color: "grey", visible: false, match: false },
        { id: 9, color: "pink", visible: false, match: false },
        { id: 10, color: "purple", visible: false, match: false },
        { id: 11, color: "red", visible: false, match: false },
        { id: 12, color: "yellow", visible: false, match: false },
        { id: 13, color: "green", visible: false, match: false },
        { id: 14, color: "blue", visible: false, match: false },
        { id: 15, color: "black", visible: false, match: false },
        { id: 16, color: "brown", visible: false, match: false },
        { id: 18, color: "grey", visible: false, match: false },
        { id: 19, color: "pink", visible: false, match: false },
        { id: 20, color: "purple", visible: false, match: false }
      ],
      selected: {
        id: 0,
        color: "",
        visible: false,
        match: false
      },
      selectedColors: []
    };

    this.handleSelectCard = this.handleSelectCard.bind(this);
  }

  handleSelectCard(item) {
    console.log("XXX", item);
    if (!item.match) {
      const selectedItem = {
        id: item.id,
        color: item.color,
        visible: true,
        match: false
      };

      if (this.state.selectedColors.length < 2) {
        this.setState(
          prevState => {
            return {
              selected: selectedItem,
              selectedColors: [...prevState.selectedColors, selectedItem]
            };
          },
          () => console.log("SLSLLS", this.state)
        );
      }
      // this.setState({
      //   selected: selected
      // });
      // this.setState(
      //   {
      //     selected,
      //     selectedColors: novoSelects
      //   },
      //   () => {
      //     if (this.state.selectedColors.length === 2) {
      //       this.state.selectedColors.forEach(item => {
      //         if (this.state.selected.color === item.color) {
      //           const itemNovo = {
      //             ...item,
      //             match: true
      //           };

      //           //let cardsNovos = [];

      //           // for (let i = 0; i < this.state.cards.length; i++) {
      //           //   if (this.state.cards[i].color === item.color) {
      //           //     console.log("XECA", itemNovo);
      //           //     cardsNovos.push(itemNovo);
      //           //   } else {
      //           //     cardsNovos.push(this.state.cards[i]);
      //           //   }
      //           // }

      //           // this.setState(
      //           //   {
      //           //     cards: cardsNovos
      //           //   },
      //           //   () => console.log("POXA", this.state)
      //           // );
      //         }
      //       });

      //       // this.setState({
      //       //   selectedColors: [],
      //       //   selected: {}
      //       // });
      //     }
      //   }
      // );
    }
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
    // const cardsInitial = this.state.cards.map(item => (
    //   <div
    //     keys={item.id}
    //     onClick={() => this.handleSelectCard(item)}
    //     style={
    //       this.state.start
    //         ? stylesVisible(item.color)
    //         : stylesOffVisible(item.color)
    //     }
    //   >
    //     {item.id === this.state.selected.id ? (
    //       <div
    //         style={{
    //           backgroundColor: item.color,
    //           width: 70,
    //           height: 70,
    //           margin: "auto"
    //         }}
    //       />
    //     ) : null}
    //   </div>
    // ));

    const cards = this.state.cards.map(item => (
      <div
        keys={item.id}
        onClick={() => this.handleSelectCard(item)}
        style={stylesOffVisible(item.color)}
      >
        {item.id === this.state.selected.id ? (
          <div
            style={{
              backgroundColor: item.color,
              width: 70,
              height: 70,
              margin: "auto"
            }}
          />
        ) : item.match ? (
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
