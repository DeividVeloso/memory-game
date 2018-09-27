import React from "react";
import "./Card.css";
class Card extends React.PureComponent {
  render() {
    const style = {};

    if (this.props.showing) {
      style.backgroundColor = this.props.backgroundColor;
    }
    return (
      <div
        onClick={this.props.onClick}
        className="card-container"
        style={style}
      />
    );
  }
}
export default Card;
