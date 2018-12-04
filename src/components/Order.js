import React from "react";

import OrderWrapper from "./OrderWrapper";
import { formatPrice } from "../helpers";
import { getTotalOrder } from "../utils";
import { TransitionGroup, CSSTransition } from "react-transition-group";
class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };

    if (!fish) {
      return null;
    }

    if (!count) {
      return null;
    }

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
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
