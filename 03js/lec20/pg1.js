document.getElementById('time').style.fontSize="100px";
setInterval(function(){document.getElementById('time').innerHTML=new Date().toLocaleTimeString()},1000);
