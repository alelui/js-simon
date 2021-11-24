// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// alert('che minchia guaddi');

// generate random numbers into an array

let num = [];

for (let i = 0; num.length < 5 ;i++){
    let randoNum = Math.floor(Math.random() * 100) + 1;
    if(!num.includes(randoNum)){
        num.push(randoNum);
    }console.log(num);
}


const numberAlert = document.querySelector('.alerto');
const numberJar = document.querySelector('.jar');

// print random
num.forEach((element) =>{
    numberJar.innerHTML += `<p class="casual">${element}</p>`;
   });

function simonSays() {
   let userList = [];
   // same trick as in campo minato add and remove hte hidden class to those element i need 
   numberJar.classList.add('hidden');
   numberAlert.classList.remove('hidden');
    
   for (let i = 0; i < 5; i++) {
        //  asking 5 times to insert the number he meorized   
       let user = parseInt(prompt('Insert a number you memorized.'));
       // if the number is the same, i'll push into the user array (line27)
       if (num.includes(user)) {
           userList.push(user);
       }
   }
   console.log(userList);

   // print numbers memorized by the user, asked in line 33
   if (userList == '') {
       numberAlert.innerHTML = `<h3 class="sad" >You didn't get even one! =[ </h3>`;
   } else {
       userList.forEach((element) => {
           numberAlert.innerHTML += `<p class="casual">${element}</p>`;
       });
   }

}

setTimeout(simonSays, 10000);   