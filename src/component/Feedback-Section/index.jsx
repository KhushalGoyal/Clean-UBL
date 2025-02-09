import styles from "./styles.module.css";
import StarRating from "../feedback_Star/index"
import ToiletBadge from "../toiletBadge";
import { AllToiletFeedbackData } from "../../utils/Feedack_count/AllToiletFeedback";
import { useState } from "react";
const FeedbackSection=()=>{
    const[data,setData]=useState(AllToiletFeedbackData);
    return(
       <div className={styles.backgroundArea}>
            <h3>Toilets which are feedback monitored</h3>
           
            <div className={styles.frontArea}>
            <div className="d-flex gap-2 align-items-center">
            <span className="text-success">Filter by Category</span>
            <select className="form-select w-25" aria-label="Default select example">
             <option >Select the category</option>
             <option value="ct">Community toilet</option>
             <option value="pt">public toilet</option>
             <option value="urinal">Urinals</option>
            </select>
            </div>
            <div className={styles.cardAreaSection}>
                {data.map((ele,index)=>(
                    
                <ToiletBadge key={index} data={ele}/>
                ))}
            </div>
            </div>
       </div>
    )
}
export default FeedbackSection