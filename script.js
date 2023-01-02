'use strict';

//Initial values
const player1_score = 0;
const player2_score = 0;
let player_1 = 'x';
let player_2 = 'o';
let activePlayer = player_1;
let gamePlaying = true;

const container = document.querySelector('.container')

const popup_1 = document.querySelector('.popup_1');
const popup_2 = document.querySelector('.popup_2');

const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');


const isWinner = function(){
    if(cell1.textContent === player_1 && cell2.textContent === player_1 && cell3.textContent === player_1
         || cell1.textContent === player_2 && cell2.textContent === player_2 && cell3.textContent === player_2
         || cell4.textContent === player_1 && cell5.textContent === player_1 && cell6.textContent === player_1
         || cell4.textContent === player_2 && cell5.textContent === player_2 && cell6.textContent === player_2
         || cell7.textContent === player_1 && cell8.textContent === player_1 && cell9.textContent === player_1
         || cell7.textContent === player_2 && cell8.textContent === player_2 && cell9.textContent === player_2
         || cell1.textContent === player_1 && cell4.textContent === player_1 && cell7.textContent === player_1
         || cell1.textContent === player_2 && cell4.textContent === player_2 && cell7.textContent === player_2
         || cell2.textContent === player_1 && cell5.textContent === player_1 && cell8.textContent === player_1
         || cell2.textContent === player_2 && cell5.textContent === player_2 && cell8.textContent === player_2
         || cell3.textContent === player_1 && cell6.textContent === player_1 && cell9.textContent === player_1
         || cell3.textContent === player_2 && cell6.textContent === player_2 && cell9.textContent === player_2
         || cell1.textContent === player_1 && cell5.textContent === player_1 && cell9.textContent === player_1
         || cell1.textContent === player_2 && cell5.textContent === player_2 && cell9.textContent === player_2
         || cell3.textContent === player_1 && cell5.textContent === player_1 && cell7.textContent === player_1
         || cell3.textContent === player_2 && cell5.textContent === player_2 && cell7.textContent === player_2)
         {
             
            if(activePlayer === player_1){
                 popup_1.style.visibility = 'visible';
                 
            }
                
            if(activePlayer === player_2){
                    popup_2.style.visibility = 'visible';
            }

            gamePlaying = false;
            //activePlayer = player_1;    
        console.log('Winner........');
    }

}


container.addEventListener('click', function(e){
        const element = e.target;
        
        if(gamePlaying){
            if(element.className === 'cell'){
                if(activePlayer === player_1   && element.textContent === ""){
                    element.textContent = activePlayer;
                    isWinner();
                    activePlayer = player_2;
                }
                
                if(activePlayer === player_2   && element.textContent === ""){
                    element.textContent = activePlayer;
                    isWinner();
                    activePlayer = player_1;
                }
                
            }else return;
        };
        
    });


