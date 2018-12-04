import React from "react";
import PropTypes from "prop-types";
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

OrderWrapper.propTypes = {
  orderIds: PropTypes.array,
  renderOrder: PropTypes.func,
  total: PropTypes.number
};

export default OrderWrapper;
