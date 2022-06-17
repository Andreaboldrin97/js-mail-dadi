//*creo la variabile `validMail` con gli array
let validMail =[ `poyo@gmail.com` , `rc2pc2@gmail.com` , `andrea@gmail.com`,`simone@gmail.com` ,`franco@gmail.com`];
console.log(validMail);

//? chiedo a l'user tramite un prompt quale sia il suo nome
let userName = prompt(`inserisci il tuo nome`);
console.log(userName);

//? chiedo a l'user tramite un prompt quale sia la sua e-mail
let userMail = prompt(`inserisci la tua e-mail`);
console.log(userMail);

//creo una variabile di comparazione 
let emailFound = false ;

//*creo una var del parent a cui voglio agg. elementi
let boxContainer = document.querySelector(`.box_container`);

//! creo un ciclo degli array
for (let i = 0; i < validMail.length; i++){
    //*creo una variaile con l'elemento che voglio creare
    let emailMessage=document.createElement('h1');

    //! se `userName` è == a un array di `validMail` scrivi in console (`bentornato userName`)
    if( userMail == validMail[i]){
        emailFound = true;
        emailMessage.innerHTML= (`bentornato ${userName}`)
    }
    boxContainer.append(emailMessage)
}