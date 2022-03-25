import { Link } from "react-router-dom";

const CartWidget = ({cantidad}) => {
  return (
    <div>
    <Link to="/cart">
      <span className="material-icons">shopping_cart</span>
      {cantidad}
    </Link>
    </div>
  );
};

export default CartWidget;