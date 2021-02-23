import React from 'react'
import "../styles/OrderConfirm/OrderConfirm.css"

function OrderConfirm() {
    return (
        <div className="orderConfirm">
            <h1>Order Confirmed</h1>
            <table className="order__table">
                <thead className="order__table-header">
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default OrderConfirm
