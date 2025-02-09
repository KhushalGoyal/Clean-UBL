import { AllToiletFeedbackData } from "../../../../utils/Feedack_count/AllToiletFeedback";

let fiveStarCount=-1;
let bestToilet=[];
for(let i=0;i<AllToiletFeedbackData.length;i++){
    let ele=AllToiletFeedbackData[i];
    if(ele.fiveStar>fiveStarCount){
      fiveStarCount=ele.fiveStar;
      bestToilet=ele;
    }
}
export default bestToilet;