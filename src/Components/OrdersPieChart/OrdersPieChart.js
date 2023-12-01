import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const OrdersPieChart = () => {
  const option = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#1158E2",
        },
        {
          offset: 1,
          color: "#42B5F2",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#BC1FD7",
        },
        {
          offset: 1,
          color: "#7F1DD1",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#E8A618",
        },
        {
          offset: 1,
          color: "#EB6B36",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#D131BE",
        },
        {
          offset: 1,
          color: "#BF1575",
        },
      ]),
    ],
    series: [
      {
        name: "item",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverLap: false,
        itemStyle: {
          borderRdaius: 50,
          borderColor: "black",
          borderWidth: 5,
        },
        label: {
          show: true,
          positions: "center",
        },
        emphasis: {
          lable: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },

        data: [
          { value: 4633, name: "search engine" },
          { value: 6734, name: "direct" },
          { value: 6433, name: "Email" },
          { value: 7846, name: "union ads" },
        ],
      },
    ],
  };

  return (
    <ReactECharts style={{ height: 140, marginTop: "1rem" }} option={option} />
  );
};

export default OrdersPieChart;
