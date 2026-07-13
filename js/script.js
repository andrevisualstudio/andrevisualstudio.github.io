console.log("Andre Visual Studio");

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="#000";

}else{

nav.style.background="rgba(0,0,0,.7)";

}

});
