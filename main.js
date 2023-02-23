window.addEventListener("load", init);

function init() {
    document.getElementById("tartalom").innerHTML = '<p>javascritpbol irok ide</p>';

    kedvencszavak();
    
}
function kedvencszavak(){
   const lista1 = ["hamburger","számítógép","heble"];
   document.getElementById("tartalom").innerHTML += '<ul>'
   for (let index = 0; index < lista1.length; index++) {
       // document.getElementById("tartalom").innerHTML += '<p>'+lista1[index]+'</p>'

        document.getElementById("tartalom").innerHTML += (`<li> ${lista1[index]} </li>`)
   }
   document.getElementById("tartalom").innerHTML += '</ul>'
}