//creo array oggetti "bike" con "marca" e "peso"
let bike = [
{
    'brand' : 'Canyon Ultimate CF Slx 9.0',
    'weight' : '6,7 Kg',
},
{
    'brand' : 'Rose X-Lite Six Disc',
    'weight' : '6.9 Kg',
},
{
    'brand' : 'Sarto asola',
    'weight' : '5,7 Kg',
},
{
    'brand' : 'Scott Addict RC Premium Disc',
    'weight' : '6,85 kg',
},
{
    'brand' : 'Time Alpe D’Huez 01',
    'weight' : '6,2 Kg',
},
{
    'brand' : 'Giant Tcr Advanced SL 0 Disc',
    'weight' : '6,3 kg',
},
{
    'brand' : 'Cervélo R5 Disc',
    'weight' : '7,0 Kg',
}
];
//trovo bici più leggera
let bikeLightness = bike[0];
for ( i = 0; i < bike.length; i++ ){
    if( bike[i]['weight'] < bikeLightness['weight']){
        bikeLightness = bike[i];
    }
}
console.log(bikeLightness);
//destrutturo
const { brand, weight } = bikeLightness;
const bikeLightnessContainer = document.getElementById("bikeLightness");
//stampo a video
bikeLightnessContainer.innerHTML = 
`
<div>
    <div>${brand}</div>
    <div>${weight}</div>
</div>
`; 