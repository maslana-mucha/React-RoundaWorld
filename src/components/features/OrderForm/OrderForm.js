import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripId, tripName, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId,
    tripName,
    tripCountry: tripCountry.alpha3Code,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(response => response.json())
    .then(parsedResponse => {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({
  tripId,
  tripName,
  tripCountry,
  options,
  setOrderOption,
  tripCost,
}) => (
  <form>
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption
            currentValue={options[option.id]}
            setOrderOption={setOrderOption}
            {...option}
          />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
        <Button
          onClick={
            options.name && options.contact
              ? () =>
                sendOrder(options, tripCost, tripId, tripName, tripCountry)
              : null
          }
        >
          Order now
        </Button>
      </Col>
    </Row>
  </form>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  tripCountry: PropTypes.object,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
