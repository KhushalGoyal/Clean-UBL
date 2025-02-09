import { useState } from "react";
import styles from "./toiletForm.module.css"
import Questiontile from "./questionTile";
import {toiletQuestion} from "../../../utils/formQuestion"
import "./starts.css";
import { countNo,countYes,negativeFeedback,positiveFeedback } from "./questionTile";
import {ToiletQuestionHindi}  from "../../../utils/formQuestionHindi";

const ToiletGradingForm=()=>{
   
    const[lang,setLang]=useState("");
    const[user,setUser]=useState([{
        name:"",
        mobile:"",
        email:""
    }]);
    const langSelection=(e)=>{
        console.log(e.target.value);
        setLang(e.target.value);
    }
    const[starValue,setStarValue]=useState(0);
   const getStarValue=(e)=>{
         const starInt=parseInt((e.target.title).charAt(5));
         setStarValue(starInt);
         }

         const getUserData=(e)=>{
            const{name,value}=e.target;
            setUser({...user,[name]:value})
            console.log(user);
           
         }
         const submitFormDetails=(e)=>{
            e.preventDefault();
            // console.log(user);
            console.log(negativeFeedback);
            console.log(positiveFeedback);
             //Here we need to push the data in backEnd
    
         }
    console.log("form Render");
    return(
       
        <div className={styles.formArea}>
            <select onChange={langSelection} name="langugae" id="language">
                <option  value="">Language  </option>
                <option value="english">
                    english
                </option>
                <option value="hindi">hindi</option>
            </select>
            <h1>1.</h1>
            <div className={styles.tileAllSection}>
           {(lang=="english" || lang=="" )&& toiletQuestion.map((ele)=>(
            <Questiontile key={ele.id} id={ele.id}
            question={ele.question}
            option1={ele.option1}
            option2={ele.option2}
            image={ele.image} />
           ))}
             {(lang=="hindi" )&& ToiletQuestionHindi.map((ele)=>(
            <Questiontile key={ele.id} id={ele.id}
            question={ele.question}
            option1={ele.option1}
            option2={ele.option2}
            image={ele.image} />
           ))}
           <div  className={styles.startrating}>
           <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

        <ul className="list-inline rating-list">
         <li> <i onClick={getStarValue} className="fa fa-star"  title="Rate 5"></i></li>
         <li> <i onClick={getStarValue} className="fa fa-star"  title="Rate 4"></i></li>
         <li> <i onClick={getStarValue} className="fa fa-star"  title="Rate 3"></i></li>
         <li> <i onClick={getStarValue} className="fa fa-star"  title="Rate 2"></i></li>
         <li> <i onClick={getStarValue} className="fa fa-star"  title="Rate 1"></i></li>
        </ul>
           <p className={styles.starvalues}>
            1.Very Dissatisfactory 2.-Dissatisfactory 3.-Neutral 4.Satisfied,5.-Very Satisfactory
           </p>
           </div>
           <form onChange={getUserData} className={styles.userDetailsForm} action="">
            <input type="text" placeholder="Name *" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <input type="mobile" placeholder="Mobile Number" name="mobile" required />
           </form>
           <div className={styles.buttonArea}>
            <button onClick={submitFormDetails} className={styles.submitBtn}>submit</button>
            <button className={styles.cancelBtn}>cancel</button>
           </div>
        </div>

           </div>
           
        
       
    )
}

export default ToiletGradingForm;