export const api=async({path,method="GET"})=>{
    const baseURL="https://api.restful-api.dev/";
    const url=baseURL+path;
    try{
        const res=await fetch(url,{
            method,
        });
        if(res.status >=200 && res.status <400){
            const data=await res.json();
            return data;
        }
        throw new Error(res.statusText);
    }catch(e){
        console.log("ERROR in",url,e);
    }
};