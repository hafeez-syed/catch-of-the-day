import React from "react";
import { formatPrice } from "../helpers";

const OrderWrapper = ({ orderIds, renderOrder, total }) => (
  <div className="order-wrap">
    <h2>Order</h2>
    <ul className="order">{orderIds.map(renderOrder)}</ul>
    <div className="total">
      Total:
      <strong>{formatPrice(total)}</strong>
    </div>
  </div>
);

export default OrderWrapper;
