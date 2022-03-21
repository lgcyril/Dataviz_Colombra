
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
//afficherDate();

function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout("showDate()",t)
}
function showDate() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = "0" + h; }
    if( m < 10 ){ m = "0" + m; }
    if( s < 10 ){ s = "0"+ s; }
    var time = h + ":" + m + ":" + s
    document.getElementById("horloge").innerHTML = time;
    refresh();
    //if( m == 30){ 
        //alert("pause dej!")
    //}
    if( m == 11 && s == 50 ){
        
        colombra(1)
    }
    if( m == 11 && s == 55){
        
        colombra(2)
    }
 }
 //refresh();
 showDate();

 function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}

function reqListener () {
        
    console.log(this.responseText);
}
         
function colombra(nb){
   
    if(nb == 1){
        document.body.innerHTML += "<h4> Cobra puissant</h4>";
        display_image('img/serpent.jpg',
        276,
        250,
        'JavaScriptImage');
    }
    if(nb == 2){
        document.body.innerHTML += "<h4> Colombe puissante </h4>";
        display_image('img/colombe.png',
        276,
        250,
        'JavaScriptImage');
    }

    if(nb == 3){
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "http://www.boredapi.com/api/activity?key=5881028", true);
      oReq.send();
      console.log(oReq.type)
      
    }

}

colombra(3);





