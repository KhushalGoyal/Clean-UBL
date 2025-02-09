import { useState } from "react";
const FAQ_tabs=(props)=>{
    const{question,answer}=props;
    const [isClick,setIsClick]=useState(false);
        const  dropAnswer=(e)=>{
            setIsClick(!isClick);
            
        }
       
    return(
        
       
      <div className="faqSection">  
   <button onClick={dropAnswer} className="FAQ">
       {isClick}{question}
    </button>
    {isClick && <div className="FAQAnswer">
    {answer}
    </div>}
    </div>
    
    )
}
export default FAQ_tabs;