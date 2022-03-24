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
livreAdulte();