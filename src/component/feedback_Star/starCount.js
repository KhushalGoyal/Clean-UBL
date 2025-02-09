export const starCountRating=(fiveStar,fourStar,threeStar,twoStar,oneStar)=>{
    let totalStar=((fiveStar*5)+(fourStar*4)+(threeStar*3)+(twoStar*2)+(oneStar*1))/(oneStar+twoStar+threeStar+fourStar+fiveStar);
                let result=(Math.floor(totalStar));
                return result;
}


