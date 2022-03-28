let teams = [
    {
        'nome': 'Pippo', 
        'punti_fatti' : 0,
        'falli_subiti' : 0   
    },
    {
        'nome': 'Pluto', 
        'punti_fatti' : 0,
        'falli_subiti' : 0   
    },
    {
        'nome': 'Topolino', 
        'punti_fatti' : 0,
        'falli_subiti' : 0   
    },
    {
        'nome': 'Taz', 
        'punti_fatti' : 0,
        'falli_subiti' : 0   
    }
];
//genero numero random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};
//inserisco numeri random
for (  let i = 0; i < teams.length; i++){
    const element = teams[i];
    element["punti_fatti"] = getRandomInt(0, 100);
    element["falli_subiti"] = getRandomInt(0, 100);
}
console.log(teams);
//nuovo array includendo solo chiavi necessarie (punti-fatti e falli-subiti)
const newArrayTeams = [];
for ( let i = 0; i < teams.length; i++ ){
    const element = teams[i];
    //destrutturo 
    const {nome, falli_subiti } = element;
    //pusho falli_subiti random nel nuovo array oggetti
    newArrayTeams.push(
        {
            nome,
            falli_subiti,
        }
    );
}
console.log(newArrayTeams);