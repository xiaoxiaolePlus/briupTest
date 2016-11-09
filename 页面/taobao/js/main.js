// JavaScript Document
window.onload=function(){
	var ole1=document.getElementById("le1");
	var ole2=document.getElementById("le2");
	ole1.onclick=function(){
		if(ole2.style.display=="block"){
			ole2.style.display="none";
		}else{
			ole2.style.display="block";	
		}
	}	
}