import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';
import PaypalButton from '../components/PaypalButton';
function OrderScreen(props) {

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [successPay]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Доставка
          </h3>
            <div>
              {order.shipping.address}, {order.shipping.city},
          {order.shipping.postalCode}, {order.shipping.country},
          </div>
            <div>
              {order.isDelivered ? "Будет доставлено " + order.deliveredAt : "Доставка в течение 5 дней"}
            </div>
          </div>
          <div>
            <h3>Оплата</h3>
            <div>
              При помощи: {order.payment.paymentMethod}
            </div>
            <div>
              {order.isPaid ? "Оплата заказа " + order.paidAt : "Оплатите заказ"}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Корзина
                </h3>
                <div>
                  Цена
          </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Корзина пуста
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>

                        </div>
                        <div>
                          Количество: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        {item.price.toLocaleString()}
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>


        </div>
        <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">
              {loadingPay && <div>Окончание оплаты...</div>}
              {!order.isPaid &&
                <PaypalButton
                  amount={order.totalPrice}
                  onSuccess={handleSuccessPayment} />
              }
            </li>
            <li>
              <h3>Общая сумма</h3>
            </li>
            <li>
              <div>Товары</div>
              <div>{order.itemsPrice.toLocaleString()} ₽</div>
            </li>
            <li>
              <div>Доставка</div>
              <div>{order.shippingPrice} ₽</div>
            </li>
            <li>
              <div>Налог (15% НДС)</div>
              <div>{order.taxPrice.toLocaleString()} ₽</div>
            </li>
            <li>
              <div>Итого к оплате:</div>
              <div>${order.totalPrice.toLocaleString()} ₽</div>
            </li>
          </ul>

        </div>

      </div>
    </div>

}

export default OrderScreen;