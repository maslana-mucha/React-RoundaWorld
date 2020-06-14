import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

//import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, setOptionValue, price }) => (
  <div className={styles.number}>
    <input
      type="number"
      className={styles.inputSmall}
      value={currentValue}
      min="1"
      max="9"
      onChange={(event) => setOptionValue(event.target.value)}
    ></input>
    {price}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;
