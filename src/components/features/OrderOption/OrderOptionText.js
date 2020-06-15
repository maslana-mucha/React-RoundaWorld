import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue }) => (
  <input
    type="text"
    className={styles.input}
    onChange={(event) => setOptionValue(event.currentTarget.value)}
  />
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
