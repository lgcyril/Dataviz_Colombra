// DATE HEURE
function pause(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));//
}
 async function afficherDate()
{
  while(true)
  {
    await pause(1000); // création d'une fonction pause et passe en argument 1000 millisecondes = 1 sec, signifie que ttes les 1sec l'heure se rafraichira
    var cejour = new Date();
    var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    var date = cejour.toLocaleDateString("fr-FR", options);
    var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
    var dateheure = date + " " + heure;
    var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    document.getElementById('dateheure').innerHTML = dateheure;
  }
}
afficherDate();
// Création fonction livreAdulte
async function livreAdulte() {
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    try {
        let response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=340&sort=-rang&facet=type_de_document&refine.type_de_document=Livre+adulte')
        let result = await response.json();  // récupère le contenu du json des livres en entier et stocke dans result
        let rang="", titre="", auteur="";  // variables string pour afficher dans le tableau html
        // recupère les rang, titre et auteur et les insère dans l'ID afficheTableau de html
        document.getElementById("afficheTableau").innerHTML="<tr> <th scope='col'>Rang</th> <th scope='col'>Titre</th> <th scope='col'>Auteur</th></tr> <tr><th scope='row' id='rang'> </th> <td id='titre'></td> <td id='auteur'></td> </tr>" ;
        // AFFICHE LE TABLEAU parcourt tout le contenu des enregistrements du tableau result
        for (let i = 0; i < result.records.length; i++) {
            //console.log(result.records[i].fields.rang + ". " + result.records[i].fields.titre + " de " + result.records[i].fields.auteur)
            // il va les enregistrer dans les variables rang, titre et auteur : br = retour à la ligne
            rang = `<td>` + result.records[i].fields.rang + `<br>` + `</td>`
            titre = `<td>` + result.records[i].fields.titre + `<br>` + `</td>`
            auteur = `<td>` + result.records[i].fields.auteur + `<br>` + `</td>`
            document.getElementById("rang").innerHTML += rang;  // pour ensuite les insérer dans l'id rang le contenu de la chaine rang
            document.getElementById("titre").innerHTML += titre
            document.getElementById("auteur").innerHTML += auteur
        }  // fin for
    }  // fin try
    catch (error) {
        console.log(error);
    }
}
// Création fonction livreJeunesse
async function livreJeunesse() {
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    try {
        let response = "";
        response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=100&sort=-rang&refine.type_de_document=Livre+jeunesse')
        let result = "";
        result = await response.json()
        let rang="", titre="", auteur="";
        document.getElementById("afficheTableau").innerHTML="<tr> <th scope='col'>Rang</th> <th scope='col'>Titre</th> <th scope='col'>Auteur</th></tr> <tr><th scope='row' id='rang'> </th> <td id='titre'></td> <td id='auteur'></td> </tr>" ;
        // AFFICHE LE TABLEAU
        for (let i = 0; i < result.records.length; i ++) {
            //console.log(result.records[i].fields.rang + ". " + result.records[i].fields.titre + " de " + result.records[i].fields.auteur)
            rang = `<td>` + result.records[i].fields.rang + `<br>` + `</td>`
            titre = `<td>` + result.records[i].fields.titre + `<br>` + `</td>`
            auteur = `<td>` + result.records[i].fields.auteur + `<br>` + `</td>`
            document.getElementById("rang").innerHTML += rang
            document.getElementById("titre").innerHTML += titre
            document.getElementById("auteur").innerHTML += auteur
        }  // fin for
    }  // fin try
    catch (error) {
        console.log(error);
    }
}
// Création fonction bdAdultes
async function bdAdultes() {
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    try {
        let response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=133&sort=-rang&facet=type_de_document&facet=auteur&refine.type_de_document=Bande+dessin%C3%A9e+adulte')
        let result = await response.json()
        let rang, titre, auteur;
        document.getElementById("afficheTableau").innerHTML="<tr> <th scope='col'>Rang</th> <th scope='col'>Titre</th> <th scope='col'>Auteur</th></tr> <tr><th scope='row' id='rang'> </th> <td id='titre'></td> <td id='auteur'></td> </tr>" ;
        // AFFICHE LE TABLEAU
        for (let i = 0; i < result.records.length; i++) {
            //console.log(result.records[i].fields.rang + ". " + result.records[i].fields.titre + " de " + result.records[i].fields.auteur)
            rang = `<td>` + result.records[i].fields.rang + `<br>` + `</td>`
            titre = `<td>` + result.records[i].fields.titre + `<br>` + `</td>`
            auteur = `<td>` + result.records[i].fields.auteur + `<br>` + `</td>`
            document.getElementById("rang").innerHTML += rang
            document.getElementById("titre").innerHTML += titre
            document.getElementById("auteur").innerHTML += auteur
        }  // fin for
    }  // fin try
    catch (error) {
        console.log(error);
    }
}
// Création fonction BDJeunesses
async function BDJeunesses() {
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    try {
        let response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=205&sort=-rang&facet=type_de_document&facet=auteur&refine.type_de_document=Bande+dessin%C3%A9e+jeunesse')
        let result = await response.json()
        let rang, titre, auteur;
        document.getElementById("afficheTableau").innerHTML="<tr> <th scope='col'>Rang</th> <th scope='col'>Titre</th> <th scope='col'>Auteur</th></tr> <tr><th scope='row' id='rang'> </th> <td id='titre'></td> <td id='auteur'></td> </tr>" ;
        // AFFICHE LE TABLEAU
        for (let i = 0; i < result.records.length; i++) {
            //console.log(result.records[i].fields.rang + ". " + result.records[i].fields.titre + " de " + result.records[i].fields.auteur)
            rang = `<td>` + result.records[i].fields.rang + `<br>` + `</td>`
            titre = `<td>` + result.records[i].fields.titre + `<br>` + `</td>`
            auteur = `<td>` + result.records[i].fields.auteur + `<br>` + `</td>`
            document.getElementById("rang").innerHTML += rang
            document.getElementById("titre").innerHTML += titre
            document.getElementById("auteur").innerHTML += auteur
        }  // fin for
    }  // fin try
    catch (error) {
        console.log(error);
    }
}
// Création fonction BDJeunesses
async function GPS() {
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    try {
        let url = "https://api.opentripmap.com/0.1/en/places/bbox?lon_min=2.3549685&lat_min=48.8459539&lon_max=2.3649685&lat_max=49.8559539&kinds=churches&format=geojson&apikey=5ae2e3f221c38a28845f05b684cface9109a9d11f428fcd7be5ec75b"
        let response = await fetch('url')
        let result = await response.json()
        let rang, titre, auteur;
        document.getElementById("afficheTableau").innerHTML="<tr> <th scope='col'>Rang</th> <th scope='col'>Titre</th> <th scope='col'>Auteur</th></tr> <tr><th scope='row' id='rang'> </th> <td id='titre'></td> <td id='auteur'></td> </tr>" ;
        // AFFICHE LE TABLEAU
        for (let i = 0; i < result.records.length; i++) {
            //console.log(result.records[i].fields.rang + ". " + result.records[i].fields.titre + " de " + result.records[i].fields.auteur)
            rang = `<td>` + result.records[i].fields.rang + `<br>` + `</td>`
            titre = `<td>` + result.records[i].fields.titre + `<br>` + `</td>`
            auteur = `<td>` + result.records[i].fields.auteur + `<br>` + `</td>`
            document.getElementById("rang").innerHTML += rang
            document.getElementById("titre").innerHTML += titre
            document.getElementById("auteur").innerHTML += auteur
        }  // fin for
    }  // fin try
    catch (error) {
        console.log(error);
    }
}
// Création fonction choix
function choix() {
    if (document.getElementById("choix").selectedIndex == 1) {
        livreAdulte();
    }
    if (document.getElementById("choix").selectedIndex == 2) {
        livreJeunesse();
    }
    if (document.getElementById("choix").selectedIndex == 3) {
        bdAdultes();
    }
    if (document.getElementById("choix").selectedIndex == 4) {
        BDJeunesses();
    }
    if (document.getElementById("choix").selectedIndex == 5) {
        GPS();
    }
}
// GPS
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  var crd = "";
  function success(pos) {
    crd = pos.coords;
    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  }
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
 // navigator.geolocation.getCurrentPosition(success, error, options);
  // Création d'options de carte (Suivre tuto d https://www.openstreetmap.org/?mlat=48.85281&mlon=2.36423#map=19/48.85281/2.36423) Code copié
//  var mapOptions = {
//     center: [17.385044, 78.486671],
//     zoom: 10
//     }
//     // Création d'un objet de carte
//     var map = new L.map('map', mapOptions);
//     // Création d'un objet Layer
//     var layer = new L.TileLayer(' http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' );
//     // Ajout d'une couche à la carte
//     map.addLayer(layer);