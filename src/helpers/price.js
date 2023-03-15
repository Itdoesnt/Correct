export const getDiscountPrice = ({ discount, price }) => {
  return Math.ceil((1 - discount / 100) * price);
};
