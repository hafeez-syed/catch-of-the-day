export function getTotalOrder(orderIds, fishes, order) {
  return orderIds.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status === "available";

    if (isAvailable) {
      return prevTotal + count * fish.price;
    }

    return prevTotal;
  }, 0);
}
