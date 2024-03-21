var tourActuel = 'x';
var resultat =[
    ['','',''],
    ['','',''],
    ['','',''],
];
//mot clé function pour definir une fonction
//parametres entres paratheses
function onButtonClick(btn,i,j){
    btn.disabled = true;
    btn.value = tourActuel;

    resultat[i][j] = tourActuel;
    //valeur maximale de i : 2
    //valeur maximale de j : 2
    //resultat [0][0] = tourActuel;
    //resultat [2][2] = tourActuel;
    //verification sil y a un gagnant
    //plusieur combinaison possible
    //horizontale, verticale, diagonales

    //horizontale: 1,2,3,| 4,5,6 | 7,8,9
    //diagonale: 1,5,9| 3,5,7

    //&& : AND
    //|| : OR

    if (
        (resultat[0][0] == tourActuel && resultat[0][1] == tourActuel && resultat[0][2]==tourActuel)
        ||
        (resultat[1][0] == tourActuel && resultat [1][1] == tourActuel && resultat[1][2]==tourActuel)
    ) {
        document.getElementById("alert").innerText = 'Joueur ' + tourActuel + ' a gagné!';
    }
    
    if (tourActuel == 'x') {
        tourActuel = '0';
    }
    else {
        tourActuel = 'x';
    }
}