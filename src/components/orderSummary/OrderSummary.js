import React from 'react';
import {groupOrders} from '../../utils/utils';
import OrderSummaryRow from './OrderSummaryRow';

const OrderSummary = ({orders, filterBy}) => {
    const getOrderType = () => {return filterBy.split(':')[0]; };
    const getOrderSort = () => {return filterBy.split(':')[1]; };
    
    const getFilteredOrders = () => {
      return groupOrders(orders, getOrderType(), getOrderSort());
    };

    return (
      <div>
        <h4>Total {getOrderType()} orders</h4>
        <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="text-center">Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Orders</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredOrders().map(order => {
            return (<OrderSummaryRow key={order.price} order={order} />);
          })}
        </tbody>
      </table>
    </div>
    );
};

OrderSummary.propTypes = {
    orders: React.PropTypes.array.isRequired,
    filterBy: React.PropTypes.string.isRequired
};

export default OrderSummary;