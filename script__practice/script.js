/* function startTimer(timeId,start,stop) {
 const id= setInterval(() =>{
    console.log(timeId);
    },start);

    setTimeout(() =>{
        clearInterval(id)
    },stop)
}

startTimer(1,1000,6000) */
/* let i=0;
const id= setInterval(() =>{
    
        i++
        console.log("Прошло примерно "+i +" секунд");
        
        
    }
,1000) */

// for(let i=1;i<=20;i++){
//     if (i%2==1) {
//         continue
//     }
//     console.log(i);
    
// }
let sec=0;
setInterval(function(){
    sec++
    console.log("Прошло ровно: "+sec+" секунд");
    
},1000)