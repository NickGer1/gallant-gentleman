import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Войти</div>
    <div className={props.step2 ? 'active' : ''} >Доставка</div>
    <div className={props.step3 ? 'active' : ''} >Оплата</div>
    <div className={props.step4 ? 'active' : ''} >Подтверждение</div>
  </div>
}

export default CheckoutSteps;