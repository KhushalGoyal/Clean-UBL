import ChartSection from "../charts";
import ColumnCharts from "../charts/Bar charts";
import ParamMissing from "../paramMissing";
import styles from "./style.module.css"
const IndividualToilet=(props)=>{

    const res=props.data;
    return(
        <>
        <div className={styles.mainArea}>
           <h1 className={styles.heading}>Overall Performance of Toilet <span className={styles.toiletBadge}>{res.toiletID}</span></h1>
           <div className={styles.toiletDetailsArea}>
              <div className={styles.paramMissing}>
                <h2 className={styles.paramMissingHeading}>Parameters which are misisng in this toilet</h2>
                <ParamMissing data={res.toiletID}/>
              </div>

              <div className={styles.barChartArea}>
                <ColumnCharts data={res}/>
              </div>
           </div>
        </div>
        </>
    )

}
export default IndividualToilet;