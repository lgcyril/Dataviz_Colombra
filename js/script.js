

async function livreAdulte() {
    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    try {
        let response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=240&facet=type_de_document&refine.type_de_document=Livre+adulte')
        let result = await response.json()

        for (let i = 0; i < result.records.length; i++)
            console.log(result.records[i].fields.titre)
    }
    catch (error) {
        console.log(error);
    }
}
//livreAdulte(); mis en commentaire car la fonction on click va activer la fonction

// Création fonction jeunesse
async function livreJeunesse() {
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    try {
        let response1 = await fetch(' https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=10&facet=type_de_document&facet=auteur&refine.type_de_document=Livre+jeunesse')
        let result = await response1.json()
        for (let i = 0; i < result.records.length; i++)
            console.log(result.records[i].fields.titre)
    }
    catch (error) {
        console.log(error);
    }
}

    async function bdAdultes() {
        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };
        try {
            let response3 = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=33&facet=type_de_document&refine.type_de_document=Bande+dessin%C3%A9e+adulte')
            let result = await response3.json()

            for (let i = 0; i < result.records.length; i++)
                console.log(result.records[i].fields.titre)
        }
        catch (error) {
            console.log(error);
        }
    }

    async function BDJeunesses() {
        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };
        try {
            let response4 = await fetch('https://opendata.paris.fr//api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=105&facet=type_de_document&facet=auteur&refine.type_de_document=Bande+dessin%C3%A9e+jeunesse')
            let result4 = await response4.json()

            for (let i = 0; i < result4.records.length; i++)
                console.log(result4.records[i].fields.titre)
        }
        catch (error) {
            console.log(error);
        }
    }


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

    }
