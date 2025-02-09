import styles from "./styles.module.css";

const AddNewToilet=()=>{
    return(
        <div className={styles.mainArea}>
            <h3 className={styles.updateHeading}>UPDATE TOILET</h3>
           <div className={styles.updationArea}>
            <div className={styles.formSection}>
                <form className={styles.newToiletForm} action="">
                    <h4>TOILET LOCATION AND ADDRESS</h4>
                    <div className={styles.addressArea}>
                        <select name="" id="" required>
                            <option  value="">category *</option>
                            <option value="">Public Toilet</option>
                            <option value="">Community Toilet</option>
                            <option value="">Urinal</option>
                        </select>
                        <select name="" id="" >
                            <option value="">Locate Near</option>
                            <option  value="">Bus stand</option>
                            <option value="">Railway Station</option>
                            <option value="">Park and Garden</option>
                            <option value="">Others</option>    
                            <option value="">Market</option> 
                        </select>
                        <select name="" id="" required >
                            <option value="">Project Status</option>
                            <option  value="">Tendering in progress</option>
                            <option value="">Tender Awarded</option>
                            <option value="">Under Construction</option>
                            <option value="">Constructed</option>    
                           
                        </select>
                        <select name="" id="" >
                            <option value="">Owned By</option>
                            <option  value="">Private/NGO</option>
                            <option value="">SHG</option>
                            <option value="">State</option>
                            <option value="">ULB</option>    
                            
                        </select>
                        <select name="" id="" >
                            <option value="">Maintained By</option>
                            <option  value="">ULB</option>
                            <option value="">Private/NGO</option>
                           
                        </select>
                        <select name="" id="" >
                            <option value="">Locate Near</option>
                            <option  value="">Bus stand</option>
                            <option value="">Railway Station</option>
                            <option value="">Park and Garden</option>
                            <option value="">Others</option>    
                            <option value="">Market</option> 
                        </select>
                     
                        
                    </div>
                    <h4 className={styles.blockAddressHeading}>TOILET BLOCK ADDRESS</h4>
                    <div className={styles.addressArea}>
                        <input name="ward" type="number" placeholder="ward" />
                        <input name="ward" type="Area" placeholder="Area" />
                        <input name="Location" type="text" placeholder="Location" />
                        <input name="Latitude" type="text" placeholder="Latitude" />
                        <input name="Longitude" type="text" placeholder="Longitude" />
                    </div>
                    <h4>OPENING DAYS AND TIME </h4>
                    <div className={styles.openingHours}>
                     
                        <label htmlFor="monday">Monday</label>
                       <input type="checkbox" name="openingDays" id="monday" />
                        <label htmlFor="tuesday">Tuesday</label>
                       <input type="checkbox" name="openingDays" id="Tuesday" />
                        <label htmlFor="wednesday">Wednesday</label>
                       <input type="checkbox" name="openingDays" id="wednesday" />
                        <label htmlFor="thursday">Thursday</label>
                       <input type="checkbox" name="openingDays" id="Thrusday" />
                        <label htmlFor="friday">Friday</label>
                       <input type="checkbox" name="openingDays" id="Friday" />
                        <label htmlFor="friday">Saturday</label>
                       <input type="checkbox" name="openingDays" id="Saturday" />
                        <label htmlFor="friday">Sunday</label>
                       <input type="checkbox" name="openingDays" id="Sunday" />
                    </div>
                    <h4>Opening Time</h4>
                    <div className={styles.OpenCloseTime}>
                            <input type="number" max={12} min={0} />
                    </div>
                </form>
            </div>
           </div>
        </div>
    )
}
export default AddNewToilet; 