import { Chart } from "react-google-charts";
const ColumnCharts=(props)=>{
  const {fiveStar,twoStar,threeStar,oneStar,fourStar}=props.data;

    console.log(typeof fiveStar);
   const data = [
    ["Element", "Feedback", { role: "style" }],
    ["5star", fiveStar, "green"], // RGB value
    ["4star", fourStar, "light-green"], // English color name
    ["3star", threeStar, "gold"],
    ["2star", twoStar, "orange"], // CSS-style declaration
    ["1star", oneStar, "red"], // CSS-style declaration
  ];

  return (
    <Chart chartType="ColumnChart" width="100%" height="100%" data={data} />
  );
}
export default ColumnCharts;