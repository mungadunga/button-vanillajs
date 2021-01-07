function changeColor(){
   var r = Math.round(Math.random() * 255);
   var g = Math.round(Math.random() * 255);
   var b = Math.round(Math.random() * 255);
   var r2 = Math.round(Math.random() * 255);
   var g2 = Math.round(Math.random() * 255);
   var b2 = Math.round(Math.random() * 255);
   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   document.getElementById("button1").style.borderColor = `rgb(${r2}, ${g2}, ${b2})`;
}
