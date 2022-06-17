//creo una var per il numero del pc
let pcNumber = Math.floor((Math.random() * 6) + 1);
console.log(pcNumber)

//?creo una var per il numero del user
let userNumber = Math.floor((Math.random() * 6) + 1);
console.log(userNumber)
//! creo unistruzione condizionale 
//*se pcNumber > userNumber allora il pc vince
if( pcNumber > userNumber){
    console.log(`mi dispiace amico hai perso`)
    //*se pcNumber < userNumber allora il user vince
}else if( pcNumber < userNumber){
    console.log(`WoW amico , mi hai batutto che fortuna`)
    //*se pcNumber = userNumber allora il pc vince 
}else{
    console.log(`mi dispiace amico ma con un pareggio il banco vince sempre`)
}