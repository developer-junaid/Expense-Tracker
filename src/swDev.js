export default function swDev(){
    let swDev = `${process.env.PUBLIC_URL}/serviceworker.js`
    if ('serviceWorker' in navigator){
        window.addEventListener('load', ()=>{
          navigator.serviceWorker.register(swDev)
          .then((reg)=>console.log("Success: ", reg.scope))
          .catch((err)=>console.log("Failure: ", err))
        })
      }
 
}