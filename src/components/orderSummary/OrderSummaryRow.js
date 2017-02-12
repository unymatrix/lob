import React from 'react';

const OrderSummaryRow = ({order}) => {
    return (
        <tr>
            <td>{order.quantity}</td>
            <td>{order.price}</td> 
            <td>{order.orders.map(orderId => {return ( orderId + ' ' ); })} </td> 
        </tr>
    );
};

OrderSummaryRow.propTypes = {
    order: React.PropTypes.object
};

export default OrderSummaryRow;