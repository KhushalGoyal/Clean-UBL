import styles from "./styles.module.css"
import source_seg from "../../assets/icons/source-segregation1.png"
import litterBin from "../../assets/icons/litterBin.png"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import PopUp from "../popUpBins";
import { LitterBinData } from "./litterBin";
import ColumnCharts from "../charts/Bar charts";

import PieChartArea from "../pieChart";
const LitterBins=()=>{
  
    return(
       <div className={styles.litterBinMainArea}>
            <div className={styles.headerArea}>
                <h2>All Bins in the ULB</h2>
            </div>
                <div id={styles.cardAreaSection} className="d-flex align-content-start flex-nowrap">
                {LitterBinData.map((ele)=>(
                    <PopUp key={ele.id} data={ele}/>
                ))}
                </div>
           
            <div className={styles.pieChartArea}>
          <PieChartArea/>
            </div>
       </div>
    )
}
export default LitterBins;