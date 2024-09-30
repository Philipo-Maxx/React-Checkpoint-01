import product from "../product";
import "./Price.css";
const Price = (props) => {
  const classes = `${props.className}`;
  return <div className={classes}>{product.price}</div>;
};

export default Price;
