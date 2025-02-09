
import styles from "./tile.module.css"
import React, { useState } from "react";
export var countYes=0;
export var countNo=0;
export var negativeFeedback=[];
export var positiveFeedback=[];
var prevId="";
const Questiontile=(porps)=>{
    const[formData, setFormData]=useState([{
        ids:"",
        answer:""
    }])
    const {id}=porps;
    
   const getDataForm=(e)=>{  
       const {value,id,name}=e.target;
       console.log("prevId",prevId);
       if(value=="no"&& prevId!=id){
        countNo++;
        negativeFeedback.push(id);
        prevId=id;
       }else if(value=='yes'&& prevId!=id){
        countYes++;
        positiveFeedback.push(id);
        prevId=id;
       }
       else{
        if(value=="yes"){
            if(negativeFeedback.includes(id)){
             negativeFeedback=negativeFeedback.filter((ele)=>{
                return (ele !=id)
             });
             positiveFeedback.push(id);
             countNo=(countNo>0)?--countNo:0;
             countYes++;   
            }
        }
        else{
            if(positiveFeedback.includes(id)){
                positiveFeedback=positiveFeedback.filter((ele)=>{
                   return (ele !=id)
                });
                negativeFeedback.push(id);
                countYes=(countYes>0)?--countYes:0;
                countNo++;   
               };
        }
       }
       
        setFormData({[name]:value,id:id});
        console.log(formData);
        
   }
   
    return(
        <React.Fragment>
            <div className={styles.QuestionTiles}>
                <div className={styles.imgDiv}>
                    <img className={styles.imgLogo} src={porps.image} alt="toliet Basin" />
                </div>
               <form  className={styles.questions}>
                {porps.id}: {porps.question}
                <div className={styles.optionArea}>
               <div className={styles.option1}>
                <label htmlFor="yes" name="answer">{porps.option1}</label>
                <input onChange={getDataForm} type="radio" value="yes" name="answer" id={porps.id} />
                </div>
                <div onChange={getDataForm} name="answer" className={styles.option1}>
                <label htmlFor="no">{porps.option2}</label>
                <input type="radio" value="no" name="answer" id={porps.id} />
                </div>
                </div>
               </form >
            </div>
        </React.Fragment>
    )
}
export default Questiontile;