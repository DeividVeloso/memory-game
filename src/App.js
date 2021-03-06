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
      selectedColors: [],
      matchedColors: [],

      start: false
    };

    this.handleSelectCard = this.handleSelectCard.bind(this);
  }

  handleSelectCard(item) {
    //Seleciona duas cores que eu cliquei por vez
    if (
      this.state.selectedColors.length < 2 &&
      item.id !== this.state.selected.id //Verifica se o item atual que eu escolhi é diferente do que já foi escolhido antes.
    ) {
      this.setState(
        prevState => {
          const visibleItem = { ...item, visible: true }; //Deixa o item visivel
          return {
            selected: visibleItem,
            selectedColors: [...prevState.selectedColors, visibleItem]
          };
        },
        () => {
          //Faz o match para ver se as cores são iguais, e deixa visivel
          if (this.state.selectedColors.length === 2) {
            //Array com os matches
            const arrayEquals = [];
            //Varre os itens selecionados
            const newArray = this.state.selectedColors;
            this.state.selectedColors.forEach(item => {
              newArray.forEach(itemNew => {
                if (item.color === itemNew.color) {
                  arrayEquals.push(item);
                }
              });
            });

            if (arrayEquals.length > 2) {
              let newCardsMacth = [];
              arrayEquals.filter(x => x.visible === true).map(item => {
                for (let i = 0; i < this.state.cards.length; i++) {
                  if (this.state.cards[i].id === item.id) {
                    console.log("ÏTEMS", this.state.cards[i]);
                    console.log("item", item);

                    //newCardsMacth.push({ ...item, match: true, visible: true });
                  } else {
                    //newCardsMacth.push(this.state.cards[i]);
                  }
                }
              });
              console.log("MATCHED", newCardsMacth);
              this.setState({
                selectedColors: [],
                cards: newCardsMacth
              });
            } else {
              console.log("NOTOOO-MATCHES", arrayEquals);
              let newCards = [];
              arrayEquals.forEach(item => {
                for (let i = 0; i < this.state.cards.length; i++) {
                  if (this.state.cards[i].id === item.id) {
                    newCards.push({ ...item, match: false, visible: false });
                  } else {
                    newCards.push(this.state.cards[i]);
                  }
                }
              });

              this.setState({
                selectedColors: [],
                cards: newCards
              });
            }
          }
          console.log("Color", this.state.selectedColors);
          console.log("Color", this.state.cards);
        }
      );
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

    const cards = this.state.cards.map(item => (
      <div
        keys={item.id}
        onClick={() => this.handleSelectCard(item)}
        style={
          this.state.start ? stylesVisible(item.color) : stylesOffVisible()
        }
      >
        {this.state.selected.visible ? (
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
