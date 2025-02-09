import { Chart } from "react-google-charts";

const PieChartArea=()=>{

 
    const data = [
        ["feedback", "per Month"],
    
        ["Dissatisfactory", 0],
        ["Unclean", 2],
        ["Very Satisfactory", 0],
        ["Clean",3],  
      ];
    
      const options = {
        title: "Overall Feedback",
      };
    
    return(

       <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

    )
}
export default PieChartArea;