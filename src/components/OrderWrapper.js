import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup } from "react-transition-group";

const OrderWrapper = ({ orderIds, renderOrder, total }) => (
  <div className="order-wrap">
    <h2>Order</h2>
    <TransitionGroup component="ul" className="order">
      {orderIds.map(renderOrder)}
    </TransitionGroup>
    <div className="total">
      Total:
      <strong>{formatPrice(total)}</strong>
    </div>
  </div>
);

export default OrderWrapper;
