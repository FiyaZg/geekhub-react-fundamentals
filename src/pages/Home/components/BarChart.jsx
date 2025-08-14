import * as echarts from "echarts";
import { useEffect, useRef } from "react";

export default function BarChart({ title, xData, yData }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    let option = {
      title: {
        text: title,
      },
      xAxis: {
        type: "category",
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: yData,
          type: "bar",
        },
      ],
    };
    var myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
  }, []);

  return <div ref={chartRef} style={{ width: "600px", height: "400px" }}></div>;
}
