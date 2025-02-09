
import styles from "./feedbackArea.module.css";
import React, { useEffect, useState } from "react";
import ToiletGradingForm from "./Toilet Grading form";
const apiExample={
    toiletId:"842512321",
    state:"Bharatpur",
    city:"Nagar",
    ulbName:"nagar",
    ulbCode:800783,
    address:"Near savedi bark palce",
    wardNo:35
    
};


const FeedbackArea=()=>{
    useEffect(()=>{
        const currApi=apiExample;
    },[apiExample])
    const[data,setData]=useState(apiExample);
    console.log(data);
    return(
        <React.Fragment>
            <div className={styles.formFrame}>
            <header className={styles.headerArea}>
                <div className={styles.ministryLogo}>
                    <img src="https://feedback.sbmurban.org/assets/img/logo.png" alt="Ministry logo" />
                </div>
                <div className={styles.ULBInformation}>
                    <span className={styles.state}>
                        State
                        <span>{data.state}</span>
                    </span>
                    <span className={styles.state}>
                        City
                        <span>{data.city}</span>
                    </span>
                    <span className={styles.state}>
                        ULB Code
                        <span>{data.ulbCode}</span>
                    </span>
                </div>
                <div className={styles.swachhtaLogo}>
                    <img src="https://feedback.sbmurban.org/assets/img/swachh-bharat-abhiyan-logo-vector-file.jpg" alt="" />
                </div>
            </header>
         
            </div>
            <div className={styles.AreaNrating}>
        <div className={styles.leftArea}>
        PUBLIC TOILET
        <div className={styles.toiletID}>{data.toiletId}</div>
        <div className={styles.toiletRating}>Ward:{data.wardNo}</div>
        </div>
        <div className={styles.rightArea}>
            Address:
            <span>{data.address}</span>
        </div>
    </div>
    <h2 className={styles.feedbackHeading}>
        Feedback
    </h2>
    <p className={styles.feedbackMessage}>We would like to hear your thoughts or feedback</p>
        <ToiletGradingForm/>
        </React.Fragment>
    )
}
export default FeedbackArea;