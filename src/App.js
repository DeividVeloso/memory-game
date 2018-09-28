import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import shuffle from "shuffle-array";

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let cards = [
      { id: 0, cardState: CardState.HIDING, backgroundColor: "red" },
      { id: 1, cardState: CardState.HIDING, backgroundColor: "red" },
      { id: 2, cardState: CardState.HIDING, backgroundColor: "navy" },
      { id: 3, cardState: CardState.HIDING, backgroundColor: "navy" },
      { id: 4, cardState: CardState.HIDING, backgroundColor: "green" },
      { id: 5, cardState: CardState.HIDING, backgroundColor: "green" },
      { id: 6, cardState: CardState.HIDING, backgroundColor: "yellow" },
      { id: 7, cardState: CardState.HIDING, backgroundColor: "yellow" },
      { id: 8, cardState: CardState.HIDING, backgroundColor: "black" },
      { id: 9, cardState: CardState.HIDING, backgroundColor: "black" },
      { id: 10, cardState: CardState.HIDING, backgroundColor: "purple" },
      { id: 11, cardState: CardState.HIDING, backgroundColor: "purple" },
      { id: 12, cardState: CardState.HIDING, backgroundColor: "pink" },
      { id: 13, cardState: CardState.HIDING, backgroundColor: "pink" },
      { id: 14, cardState: CardState.HIDING, backgroundColor: "orange" },
      { id: 15, cardState: CardState.HIDING, backgroundColor: "orange" }
    ];
    cards = shuffle(cards);
    this.state = {
      cards,
      noClick: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleNewGame = () => {
    let cards = this.state.cards.map(c => {
      return {
        ...c,
        cardState: CardState.HIDING
      };
    });
    cards = shuffle(cards);
    this.setState({ cards });
  };

  handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        //Verifica se o item do array tem dentro do idsToChage, se tiver muda para um novo estado
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c; //Retorna do jeito que estava no array Cards
      });
    }; //Fim da funcao mapCarsState

    //Pega o Item que eu cliquei na tela.
    const foundCard = this.state.cards.find(c => c.id === id);

    //Se o Card que eu cliquei ou ele for diferente de HIDDING eu retorno,
    //Pois já é um item visivel.
    if (this.state.onClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }

    //Usado para decidir se o usuário vai por clicar de novo ou não
    let noClick = false;

    //Nesse ponto ele deixa visivel o card que acabei de clicar.
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

    //Pega só os cards que estão Visiveis na tela.
    const showingCards = cards.filter(c => c.cardState === CardState.SHOWING);

    //Pegando só os Ids dos Cards Visiveis na tela
    const ids = showingCards.map(c => c.id);

    //Verifico se tem dois cards selecionads e se as cores são iguais
    if (
      showingCards.length === 2 &&
      showingCards[0].backgroundColor === showingCards[1].backgroundColor
    ) {
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } //Caso não tenha as mesmas cores entao eu escondo novamente esses cards selecionados
    else if (showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      //Trava o click,
      noClick = true;
      //pois vou esperar dois segundos antes de esconder os cards selecionados com a cor errada.
      this.setState({ cards, noClick }, () => {
        setTimeout(() => {
          //Escondo os cards errados, e libero o click novamente para selecionar outros
          this.setState({ cards: hidingCards, noClick: false });
        }, 1000);
      });
      return;
    }
    //Se selecionou o primeiro card
    //Se deu match
    this.setState({ cards, noClick });
  }

  render() {
    const cards = this.state.cards.map(card => (
      <Card
        key={card.id}
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor}
        onClick={() => this.handleClick(card.id)}
      />
    ));
    return (
      <div>
        <Navbar onNewGame={this.handleNewGame} />
        {cards}
      </div>
    );
  }
}
