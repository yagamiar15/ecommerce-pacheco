const CartWidget = ({cantidad}) => {
  return (
    <div>
      <span className="material-icons">shopping_cart</span>
      {cantidad}
    </div>
  );
};

export default CartWidget;