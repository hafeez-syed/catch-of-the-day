import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    }),
    addToOrder: PropTypes.func
  };
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
