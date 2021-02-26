import React from 'react'
import "../styles/OrderConfirm/OrderConfirm.css"

function OrderConfirm(props) {

    const order = props.location.state.order

    const calculateTotal = (products) => {

        let total = 0;

        products?.forEach(element => {
           total += parseFloat(element.price)
        });

        return total.toString()
    }

    return order ? <div className="orderConfirm">
            <h1>Order Confirmed</h1>
            <div className="order__details">
                <div className="order__details-row">
                    <h2>Paypal ID</h2>
                    <p>{order?.paypalId}</p>
                </div>
                <div className="order__details-row">
                    <h2>Shipping</h2>
                    <p>
                        <span>Free Shipping</span>
                        <span>Shipping to FERMO</span>
                    </p>
                </div>
                <div className="order__details-row">
                    <h2>Order Placed</h2>
                    <p>{order?.createdAt.split("T")[0]}</p>
                </div>
                <div className="order__details-row">
                    <h2>Estimated Delivery</h2>
                    <p>10-14 Days</p>
                </div>
                <div className="order__details-row">
                    <h2>Total</h2>
                    <p>£{calculateTotal(order.products)}</p>
                </div>
            </div>
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
                    {order?.products?.map(item => 
                    <tr key={item.id + Math.random() * 100}>
                        <td className="row-image"><img src={item.images[0]} alt="product"/></td>
                        <td className="row-name">{item.name}</td>
                        <td className="row-price">£{item.price}</td>
                        <td className="row-Size">{item.size}</td>
                        <td className="row-subtotal">£{item.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </div> : <div>Error</div>
    }


export default OrderConfirm
