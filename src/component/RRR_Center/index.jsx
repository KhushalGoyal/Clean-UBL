
import RRR from "../../assets/icons/RRR.png"

import { createSearchParams, Link, Navigate, Route, Routes, useNavigate } from "react-router";

import styles from "./styles.module.css"
const RRRCenter=()=>{
    const navigate=useNavigate();

        const onGetGoods=()=>{
           navigate({
            pathname:"/newEntry",
            search:createSearchParams({
                id:"123"
            }).toString()
           })
        }
    
    return(
        
        <div className={styles.mainArea} >
        <div className={styles.headingArea}>
         <img className={styles.RRRphoto} src={RRR} alt="" />
        <div className={styles.headingText}>
         REDUCE REUSE RECYCLE
        </div>
        </div>
        <div className={styles.RRRCard}>
         <img className={styles.rrrImage} src="https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2023/08/30/dbcl_169328376664ed75b615dca_29aug15.jpg" alt="" />
        <div className={styles.addressAndAll}>
             <div className={styles.Address}>
             Address : Nagar nigam Dungarpur main office room 32
             </div>
             <div className={styles.RRRid}>
                 RRR ID : RRR800232
             </div>
             <div className={styles.badge}>
                 RRR Center Status : Permanent
             </div>
             <div className={styles.OpeningAndClosing}>
                 <div>Opening Time: 10.00 AM</div>
                <div> Closing Time :6.00 PM</div>
             </div>
        </div>
        <div className={styles.buttonArea}>
         <button onClick={onGetGoods} className={styles.RRRbtn}>
         सामान लेवे</button>
         <button className={styles.RRRbtn}>
         सामान बेचना/देना</button>
         <button className={styles.RRRbtn}>मोजूद सामान की सूची</button>
         <button className={styles.RRRbtn}>
         डाउनलोड सूची</button>

        </div>
        </div>
        
     </div>  
       
    )
}
export default RRRCenter;