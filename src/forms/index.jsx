import { useState } from "react"
import styles from "./form.module.css"
const FormDetails=()=>{
    const [state,setState]=useState({
        email:"",
        password:""
    })
    const formHandel=(e)=>{
        const{name,value}=e.target;
        setState({...state,[name]:value});
        // console.log(state);
    }
    const catchData=(e)=>{
        console.log(state);
        e.preventDefault();
    }
    return(
        <div className={styles.formArea}>
            <h1>Singn In</h1>
            <form onChange={formHandel} action="" className={styles.singUpForm}>
                <input  name="email" type="text" className={styles.inputArea} />
                <label htmlFor="inputEmail" className={styles.inputLabel}>Email </label>
                <input name="password" type="password" className={styles.inputArea} />
                <label htmlFor="inputPassword" className={styles.inputLabel}>
                   Password:
                </label>
                <button onClick={catchData} className={styles.singUpBtn}>Sing Up</button>
            </form>
        </div>
    )
}

export default FormDetails;