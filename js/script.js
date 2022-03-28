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
        let result = await response.json()
        let rang="", titre="", auteur="";
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
  
  navigator.geolocation.getCurrentPosition(success, error, options);