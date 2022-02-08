import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCardButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCardButton;
