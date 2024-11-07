document.addEventListener('DOMContentLoaded', (Loaded) =>{
   //Welcome message
    console.log('Welcome to the JS, i hate this');
    document.getElementById('main');
    const newRow = document.createElement('div');
    // adding contentin header and paragraph
    document.getElementById("ex1").innerHTML = "<h4>Lab 5 work</h4>" + "<P>Let: new rows to be added in file because it is a labwork</P>";
    
//adding image
document.getElementById("global-header").innerHTML = 
"<img id ='logo' src=C:img/th.jpeg' alt= 'dog'>"

document.getElementById("ex1").style.color = "#f8f9f7";
document.getElementById("ex1").style.padding = "0% 20%";
document.getElementById("main").style.cssText = "display: flex; height: 120px; background-color: #f8f9f7; align-items: center;";
document.getElementById("l").style.cssText = "flex-grow: 2; height: 120px; width: auto;";
document.getElementById("logo").style.cssText = "width: auto; height: 100%;";

});