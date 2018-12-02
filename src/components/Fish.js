import React from "react";
import { formatPrice } from "../helpers";
class Fish extends React.Component {
  clickHandler = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <React.Fragment>
        <li className="menu-fish">
          <img src={image} alt={name} />
          <h3 className="fish-name">
            {name}
            <span className="price">{formatPrice(price)}</span>
          </h3>
          <p>{desc}</p>
          <button disabled={!isAvailable} onClick={this.clickHandler}>
            {isAvailable ? "Add to Cart" : "Sold out!"}
          </button>
        </li>
      </React.Fragment>
    );
  }
}

export default Fish;
