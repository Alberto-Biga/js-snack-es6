const myArray = [
    'Michele',
    'Fabio', 
    'Roberto', 
    'Giovanni', 
    'Simone', 
    'Chiara'
];
        //metodo for each
//creo valori min e max
const min = 1;
const max = 5;
//array vuoto dove pushare elementi selezionati
const selectedNames = [];
//for each con condizione min < index < max
myArray.forEach(
    (element, index) => {
        if ( min < index && index < max ){
            selectedNames.push(element);            
        }
    }
);
//stampo in console i nomi selezionati
console.log(selectedNames);

        //metodo filter
const selectedNames2 = myArray.filter (
    //imposto condizione min < index < max
    (element,index) => min < index && index < max
);
//stampo in console i nomi selezionati
console.log(selectedNames2);