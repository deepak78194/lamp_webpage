var btn = document.getElementById("btn");
var light = document.getElementById("light");
var lamp = document.getElementById("lamp");

lamp.onclick = function() {
    light.classList.toggle("on");
}

btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
    btn.classList.toggle("active");
}
