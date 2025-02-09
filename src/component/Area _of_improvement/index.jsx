import { useState } from "react";
import styles from "./styles.module.css";
const AreaOfImprovement=(props)=>{
    console.log("props are",props);
    const [data1,setData]=useState(props.data);
    return(
        <>
        
        <div className={styles.worstPerformingToiletArea}>
        {data1.map((ele)=>(
            <div key={ele.toiletID} className={styles.wordToiletCard}>
                <div className={styles.imageArea}>
                    <img src="https://www.csrmandate.org/wp-content/uploads/2022/09/Toilet-Board-Coalitions-WASH-Leaders-Forum-2022-called-for-aligning-with-the-governments-vision-for-Swachh-Bharat2.jpg" alt="" srcset="" />
                </div>
                <div className={styles.imageContent}>
                    <h4>Addres :{ele.Address}</h4>
                    <p>ward:{ele.ward}</p>
                    <p>TOILET ID :{ele.id}</p>
                    <h4> Care taker :{ele.careTaker}</h4>
                    <h4> Operation and Maintainance given to :{ele.oAndM}</h4>
                </div>
                <div className={styles.paramMissing}>
                    <h4>Total feedback :{data1.length}</h4>
                    <div className={styles.negativeFeedbackParameter}>
                        <div className={styles.onParamMissing}>
                            <div className={styles.misParaImg}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.misParaImg}>
                                <p>Bolting is not found</p>
                                <p>Number of people not found </p>
                                <p>People give 1 star :{ele.oneStar}</p>
                                <p>People give 2 star :{ele.twoStar}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
        </>
    )
}
export default AreaOfImprovement;