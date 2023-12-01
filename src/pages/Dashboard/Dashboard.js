import React from "react";
import css from "./Dashboard.module.css";
import Statistics from "../../Components/Statistics/Statistics";
import Orders from "../../Components/Orders/Orders";
import {
  cardsData,
  ordersData,
  groupNumber,
  INITIAL_EVENTS,
  userData,
  boardData,
} from "../../data/data";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead}  them-container`}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={css.durationButton}>
              <select>
                <option value="">1 week</option>
                <option value="">1 Month</option>
                <option value="">1 Year</option>
              </select>
            </div>
          </div>

          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div key={index} className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>{card.change}</span>
                </div>
                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Statistics />
      </div>

      <Orders />
    </div>
  );
};

export default Dashboard;
