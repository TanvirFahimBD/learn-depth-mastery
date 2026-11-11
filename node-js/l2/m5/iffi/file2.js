//CALL THE LAST ONE

// function add(a, b){
//     console.log(a + b);    
// }

// function add(a, b){
//     console.log(a * b);    
// }

// add(12, 10); //120


//IFFI - CREATE ITS OWN BLOCK SCOPE
(()=> {
    let a = 430;
    console.log(a);    
})();

(()=>{
    let a = 30;
    console.log(a);    
})();