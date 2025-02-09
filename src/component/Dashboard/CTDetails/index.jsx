import styles from "./CtDetails.module.css";

import delImg from "../../../assets/icons/delete.png"
import editImg from "../../../assets/icons/edit.png"
import viewImg from "../../../assets/icons/view.png"
import { useState } from "react";
import { useMemo } from "react";

const CTDetails=(props)=>{
    console.log(props);
    const[CTData,setCTData]=useState(props.data);
    // useMemo(()=>{
    //     console.log("MEmo called");
    //     setCTData(TotalCTdata);
    // },[CTData]);

    const onDelete=(i)=>{
        console.log(i);
        const currData=CTData.filter((ele)=>{
           return ele.id!=i;
        });
        setCTData(currData);
    }
    return(
        <div className={styles.AllCtArea}>
            <h3 className={styles.CtHeading}>CT Details</h3>
            <table className={styles.CtDetails}>
               <tbody>
                <tr className={styles.tableRow}>
                    <th>Category</th>
                    <th>Ward</th>
                    <th>ToiletID</th>
                    <th>Pincode</th>
                    <th>Status</th>
                    <th>Project Status</th>
                    <th>Address</th>
                    <th>Actions</th>
               </tr>
                   {CTData.map((i)=>(
                    <tr className={styles.tableRowNew} key={i.id}>
                        <td>{i.category}</td>
                        <td>{i.ward}</td>
                        <td>{i.id}</td>
                        <td>{i.pincode}</td>
                        <td>{i.status}</td>
                        <td>{i.project_status}</td>
                        <td>{i.Address}</td>
                        <td className={styles.actionArea} id={i.id}>
                            <img onClick={(id)=>{onDelete(i.id)}} src={delImg} alt="" />
                            <img src={editImg} alt="" />
                            <img  src={viewImg} alt="" />
                        </td>
                    </tr>
                   ))} 
                   </tbody>
            </table>
        </div>
    )
}
export default CTDetails;       