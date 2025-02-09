import styles from "./styles.module.css";
import Badge from 'react-bootstrap/Badge';
import { TotalCTdata } from "../../utils/CommunityToilet";
// import 'bootstrap/dist/css/bootstrap.min.css';

const ParamMissing=(props)=>{
//    console.log("props in Param Missing",props.data);
let res=props.data;
    // Here we need to filter data from the details of the 
    // All toilet section while matching through the data 
    // id that we get through props 
    let renderToilet;
    const selectedToilet=()=>{
        let result=TotalCTdata.filter((ele)=>{
          
           return( ele.id==res);
        })
       renderToilet=result;
    }
    selectedToilet();
   
    
   /// Here we have the data in renderToilet which we want to feature in the react 
   // component
    
    let totalMarksDeducted=0;
    return(
        <div className={styles.paramArea}>
            { (renderToilet[0].isGoogleMapped==false && (totalMarksDeducted+=20)) &&(<div className={styles.oneParamArea}>
            <div id={styles.isGoogle}  className={styles.circleOuter}>
              
                    Toilet is not google maped
                
            </div>
            <div className={styles.badgeArea}>Marks Deducted :20</div>
            </div>)}
            {(renderToilet[0].isCareTaker==false && (totalMarksDeducted+=20)) &&(<div className={styles.oneParamArea}>
            <div id={styles.isCareTaker} className={styles.circleOuter}>
              
                    Care Taker is not present
                
            </div>
            <div className={styles.badgeArea}>Marks Deducted :20</div>
            </div>)}
            { (renderToilet[0].isComplaintRegister==false && (totalMarksDeducted+=20)) &&(<div className={styles.oneParamArea}>
            <div className={styles.circleOuter}>
              
                  Complaint Register is not present
                
            </div>
            <div className={styles.badgeArea}>Marks Deducted :20</div>
            </div>)}
            { (renderToilet[0].isSanitaryPadAvailable==false && (totalMarksDeducted+=20)) &&(<div className={styles.oneParamArea}>
            <div className={styles.circleOuter}>
            Sanitary Pad is not available                
            </div>
            <div className={styles.badgeArea}>Marks Deducted :20</div>
            </div>)}
            { (renderToilet[0].isUserChargeCollected==false && (totalMarksDeducted+=20)) &&(<div className={styles.oneParamArea}>
            <div className={styles.circleOuter}>
            User charge is not collected          
            </div>
            <div className={styles.badgeArea}>Marks Deducted :20</div>
            </div>)}
            { (renderToilet[0].isCleaningRegister==false && (totalMarksDeducted+=20)) &&(<div className={styles.oneParamArea}>
            <div className={styles.circleOuter}>
           Cleaning Register is not maintained       
            </div>
            <div className={styles.badgeArea}>Marks Deducted :20</div>
            </div>)}
            { (renderToilet[0].isAbledToilet==false && (totalMarksDeducted+=20)) &&(<div className={styles.oneParamArea}>
            <div id={styles.isAbled} className={styles.circleOuter}>
           No seats for handicapped people     
            </div>
            <div className={styles.badgeArea}>Marks Deducted :20</div>
            </div>)}
            <div className={styles.totalMarksArea}>
                Total Marks Loosing :{totalMarksDeducted}
            </div>
        </div>
    )
}
export default ParamMissing;