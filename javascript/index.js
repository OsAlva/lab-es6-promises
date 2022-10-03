// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));



// Iteration 1 - using callbacks
// getInstruction('mashedPotatoes', 0, (step0) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
    getInstruction('mashedPotatoes', 0,(step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      // ... Your code here
      getInstruction('mashedPotatoes', 1,(step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
          // ... Your code here
          getInstruction('mashedPotatoes', 2,(step3) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
                    // ... Your code here
                  getInstruction('mashedPotatoes', 3,(step4) => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                    // ... Your code here
                        getInstruction('mashedPotatoes', 4,(step5) => {
                          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready</li>`;
                          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
                          // ... Your code here
                          
                        }, (error) => console.log(error));
                  }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
//}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
        .then( (step0) => {
          document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
          //  ... Your code here
          return obtainInstruction('steak',1);
        })
        .then((step1) => {
          document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
          //  ... Your code here
          return obtainInstruction('steak',2);
        } )
        .then((step2) => {
          document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
          //  ... Your code here
          return obtainInstruction('steak',3);
        })
        .then((step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
          //  ... Your code here
          return obtainInstruction('steak',4);
        })
        .then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
          //  ... Your code here
          return obtainInstruction('steak',5);
        })
        .then((step5) => {
          document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
          //  ... Your code here
          return obtainInstruction('steak',6);
        })
        .then((step6) => {
          document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
          //  ... Your code here
         
          return obtainInstruction('steak',7);
          
        })
        .then(step7 =>{
          document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
          document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
          document.querySelector("#steakImg").removeAttribute("hidden");
        })
        .catch((err) => console.log(err));
     
// Iteration 3 using async/await
async function makeBroccoli() {
  // ... Your code here

    const response1 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`;

    const response2 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`;

    const response3 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`;


    const response4 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`;

    const response5 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`;

    const response6 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`;

    const response7 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${response7}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoly is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");


}

makeBroccoli()
// Bonus 2 - Promise all

let algo1 = obtainInstruction('brusselsSprouts', 0)
let algo2 = obtainInstruction('brusselsSprouts', 1)
let algo3 = obtainInstruction('brusselsSprouts', 2)
let algo4 = obtainInstruction('brusselsSprouts', 3)
let algo5 = obtainInstruction('brusselsSprouts', 4)
let algo6 = obtainInstruction('brusselsSprouts', 5)
let algo7 = obtainInstruction('brusselsSprouts', 6)
let algo8 = obtainInstruction('brusselsSprouts', 7)
//let algo9 = obtainInstruction('brusselsSprouts', 8)



Promise.all([algo1,algo2,algo3,algo4,algo5,algo6,algo7,algo8,])
//.then((valor)=> console.log("promise all, quan totes hagin resolt: ", valor) )
.then( (step) => {
  for(let i=0;i<brusselsSprouts.length;i++){
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[i]}</li>`
 }

 document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
 document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})
.catch((err)=> console.log("catch()", err));


// .then( (step1) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`
//   //  ... Your code here
//   return obtainInstruction('brusselsSprouts',2);
// })
// .then( (step2) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`
//   //  ... Your code here
//   return obtainInstruction('brusselsSprouts',3);
// })
// .then( (step3) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`
//   //  ... Your code here
//   return obtainInstruction('brusselsSprouts',4);
// })
// .then( (step4) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`
//   //  ... Your code here
//   return obtainInstruction('brusselsSprouts',5);
// })
// .then( (step5) => {
//    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`
//  //  ... Your code here
//   return obtainInstruction('brusselsSprouts',6);
//   })
//  .then( (step6) => {
//    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`
// //   //  ... Your code here
//   return obtainInstruction('brusselsSprouts',7);
//  })
// .then( (step7) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`
// //   //  ... Your code here
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
//   document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//   return obtainInstruction('brusselsSprouts',8);
// })



