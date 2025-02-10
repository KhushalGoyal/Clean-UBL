import styles from "./styles.module.css";
import Btoilet from "../../assets/icons/Btoilet.png"
const CareTakerDashboard=()=>{
    return(
       <div className={styles.backGroundArea}>
            <div className={styles.mainArea}>
                <h3 className="text-primary text-center">Toilets are care taken by Care Takers</h3>
                <div className={styles.cardSection}>
                   <div className={styles.card}>
                        <div className={styles.logoArea}>
                            <img className={styles.logoImage} src={Btoilet} alt="" />
                        </div>
                        <div className={styles.adressNIDarea}>
                            <p>Adrees :Near kapoori bazar,Bada bazar road </p>
                            <p>Toilet ID :80004512 </p>
                            <p>Ward no : 32 </p>
                            <p>Category : public toilet</p>
                        </div>
                        <div className={styles.caretakerDetails}>
                            <p>Care taker name :Roshan singh</p>
                            <p> Mobile no : 9987541402</p>
                            <p>O&M :ULB </p>
                        </div>
                        <div className={styles.cleanAndOpenArea}>
                            <button type="button" className="btn btn-success my-1">Clean</button>
                            <button type="button" className="btn btn-success my-1">Open</button>
                        </div>
                        <div className={styles.AttendanceRegister}>
                            <button className="btn btn-danger my-1">Download Attendance Register</button>
                        </div>
                   </div>
                   <div className={styles.card}>

                   </div>
                   <div className={styles.card}>

                   </div>
                   <div className={styles.card}>

                   </div>
                </div>
            </div>
       </div>
    )
}
export default CareTakerDashboard;