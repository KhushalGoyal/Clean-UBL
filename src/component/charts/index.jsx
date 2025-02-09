import { Chart } from "react-google-charts";
import styles from "./styles.module.css"
let q7=21;
const ChartSection=(props)=>{
  const res=props.data.data;
  console.log("response is",res);
    const data = [
        ["feedback", "per Month"],
        ["Very Dis satisfactory" ,res.oneStar],
        ["Dissatisfactory", res.twoStar],
        ["Neutral", res.threeStar],
        ["Very Satisfactory", res.fourStar],
        ["Satisfied", res.fiveStar],  
      ];
      console.log(data);
      const options = {
        title: "Overall Feedback",
      };
    
    return(


        <div className={styles.totalCTCalculation}>
       <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>



    )
}
export default ChartSection;