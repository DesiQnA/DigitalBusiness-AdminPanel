import React from "react";
import { groupNumber, ordersData } from "../../data/data";
import css from "./Orders.module.css";
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";
const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src="./logo.png" alt="Logo" />
        <span>Orders today</span>
      </div>

      <div className={`grey-container  ${css.stat}`}>
        <span>Amout</span>
        <span>{groupNumber(3662)}</span>
      </div>

      <div className={css.orders}>
        {ordersData.map((order, index) => (
          <div key={index} className={css.order}>
            <div>
              <span>{order.name}</span>
              <span>{order.change}</span>
            </div>

            <div>
              <span>{order.type}</span>
              <span>{order.items}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={css.orderChars}>
        <span>Split by orders</span>
        <OrdersPieChart />
      </div>
    </div>
  );
};

export default Orders;
