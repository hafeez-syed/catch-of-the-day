import React from "react";

import OrderWrapper from "./OrderWrapper";
import { formatPrice } from "../helpers";
import { getTotalOrder } from "../utils";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    if (!fish) {
      return <li key={key}>loading . . </li>;
    }

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = getTotalOrder(orderIds, this.props.fishes, this.props.order);

    return (
      <OrderWrapper
        orderIds={orderIds}
        renderOrder={this.renderOrder}
        total={total}
      />
    );
  }
}

export default Order;
