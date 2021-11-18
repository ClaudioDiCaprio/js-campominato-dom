// **************Brainstorming**************

//approccio del value come nell'esercizio del biglietto del treno, se l'utente dovrá eseguire una scelta e in base alla scelta avremo tre diverse quantitá di scatole, sará proprio questo l'elemento da utilizzare per poter modificare il layout tramite la raccolta del value(crea una varaiabile alla quale coleghi il .value, riguarda la lezione commento riguardante lo SWITCH) quindi per ogni livello di difficoltá scelta creeremo delle scatole con un calc diverso uno per beginner un o per warrior e uno per god(CICLO FOR???)

// la griglia andrá prodotta in seguito al click quindi necessiteremo di un add event listner click con una funzione che modificherá il calc, o meglio aggiungerá la classe(a cosa?) 

// dobbiamo creare i div a cui aggiungere la classe e visto che vengono modificati da un calc che viene modificato da una scelta dell'utente tanto vale aggiungerli dinamicamente (let += `` , create element, add element)

//al click avremo anche un altro evento ovvero il cambio di colore dello sfondo (remove class add class )

// COSA PUÓ ESSER FATTO CON UNA FUNZIONE?
// RIVEDI GEEKSFORGEEKS NESTED SWITCH,NESTED FUNCTION.
// UN IF PUÓ CONTENERE UNA FUNZIONE.

// *********reminder*********

// ricorda diapplicare il choose your destiny con js altrimenti fará sfalzare i div in basso se non twikki la visibilitá






// *********FUNCTION*********


const tatami = document.querySelector('.tatami');
const selectDifficulty = document.getElementById('selectDifficulty');

const playBtn = document.querySelector('.mine_btn');

playBtn.addEventListener('click', function () {

   tatami.innerHTML = '';

   let valueDifficulty = selectDifficulty.value;

   Grid(howMany(valueDifficulty));
   
});


//FUNCTION

//THIS GENERATES THE WHOLE GRID BASED ON PLAYER CHOICE
function Grid(value) {

    let bomb =[];

      for(let j = 0; j < 1; j++){

            for(let c = 0 ; c < 16; c++){
                claymore = (Math.floor(Math.random() * 100 + 1));
                bomb.push(claymore);
            }
           console.log(bomb); 
       };

   for (let i = 0; i < value; i++) {
      
      const square = SquareMaster(tatami);
      square.className = ('square');
      
      square.addEventListener("click" , function(){
        this.textContent
        console.log(this)
        for(let t = 0; t = bomb.length; t++){
            if ( this.textContent == bomb[i]){//HERE SE IMPOSTO CHE LA X É UGUALE A  6 X ESEMPIO SI COLORERÁ COME SEGUE, SE INVECE LA IMPOSTO UGUALE BOMB[i] NON SUCCEDE NULLA NONOSTATE L'ARRAY VENGA POPOLATO
             square.classList.add('toaddtochange');
            }else{
            square.classList.add('bmk');
            }
        }    
      });
     
      
      //THIS SWITCH WILL ADD A CLASS AMONG THE MAIDEN ONE BASED ON THE VALUE RETURNED FROM THE CHOICE
      switch (value) {
         case 100:
            square.classList.add('beginner');
            break;
         case 81:
            square.classList.add('warrior');
            break; 
         case 49:
            square.classList.add('god');
            break;
         
      }
      
      let x = square.innerHTML = (i+1);
     
   }
}


// 1 GENERATE DIV AND APPEND THEM
function SquareMaster(create) {
   
   const square = document.createElement('div');
   create.append(square);
   return square;
}

// 2 GIVES BACK A NUMBER BASED ON DIFFICULTY VALUE
function howMany(rank) {
   
   if (rank == 'beginner') {

      return 100;
   } else if (rank == 'warrior') {
      
      return 81;
   }

   return 49;
}




