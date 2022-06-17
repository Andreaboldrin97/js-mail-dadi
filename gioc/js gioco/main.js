//creioamo le variabili dei numeri lasciandola non definità
let indexN;
//creioamo le variabili dei numeri multipli di 3 e 5 lasciandole non definità
let nMultiple3;
let nMultiple5;

//*creo una var del parent a cui voglio agg. elementi
let boxContainer = document.querySelector(`.box_container`);

// stampiamo in console i numeri progressivi da 1 a 100 
//!ricorda i è un valore numerico mai cambiarlo facendolo diventare una striga perchè se verificato si fermerà (i=`stringa`)

for( let i = 1 ; i <= 100 ; i = i + 1){
    //*creo una variaile con l'elemento che voglio creare

    let boxElement =document.createElement('div');
    //*aggiungiamo a questo div la classi: box_dom

      boxElement.classList.add('box_dom','col-2', 'box_bgN');

    //? assegniamo una var per i N° multipli di 3 e 5 all'interno della var (i)

    let nMultiple3 = i % 3 == 0;
    let nMultiple5 = i % 5 == 0;
    //? stampiamole in console

    console.log(nMultiple3);
    console.log(nMultiple5);
    //!creiamo un if con le possibilità :

    //! se nM3 and nM5 sono vere allora;
    //!(mettiamo prima la doppia affermazione perchè essendo a js cascata si dobbiamo verificare prima i multipli de entrambi per dargli importanza in modo da far uscire prima il risultato multiplo)
    if((nMultiple3 == true) && ( nMultiple5 == true )){
        //* la var boxElement la dichiaro = a 1 e la porto all'interno dell' html

        //?al click fai partire questa funzione ed aggiungi questti elementi 
        boxElement.addEventListener(`click`, function(){
            //* se un elemento è multiplo di 3 e di 5 allora quel boxElement sarà `FizzBuzz`
            boxElement.innerHTML=(`FizzBuzz`);
            boxElement.classList.add('box_bgFizzbuzz');    
        })
       
        //!stampa in console `fizzbuzz`
        console.log(`fizzbuzz`); 
    } 
    //! se solo nM3 è vera allora;
    else if( nMultiple3 == true){
        //* la var boxElement la dichiaro = a 1 e la porto all'interno dell' html

   //? al click fai partire questa funzione ed aggiungi questti elementi 
    boxElement.addEventListener(`click`, function(){
        //* se un elemento è multiplo di 3 allora quel boxElement sarà `Fizz`
        boxElement.innerHTML=(`fizz`);
       boxElement.classList.add('box_bgFizz');   
     })
        //!stampa in console `fizz`
        console.log(`fizz`);

    } 
    //! se solo nM5 è vere allora;
    else if( nMultiple5 == true){
        
        //? al click fai partire questa funzione ed aggiungi questti elementi 
        boxElement.addEventListener(`click`, function(){
            //* se un elemento è multiplo di 5 allora quel boxElement sarà `Buzz`
           boxElement.innerHTML=(`Buzz`);
          boxElement.classList.add('box_bgBuzz');   
        })
            //!stampa in console `buzz`
            console.log(`buzz`);
        }else{
            console.log(i);
        }
        boxElement.innerHTML= i
        //* dico al parent(boxContainer) di aggiunger i (boxElement) creati
        //*lo inserisco in fondo perchè nell'if cambiono alcune classi quindi aspetto che le cretteristiche(classi) di i siano complete e poi lo aggiungo nel html
        boxContainer.append(boxElement)
    }
   
    