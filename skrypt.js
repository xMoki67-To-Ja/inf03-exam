function ColorPicker(){
    var color = document.getElementById("colorWartosc");
    var k0 = document.getElementById("komorka0");
    var k1 = document.getElementById("komorka1");
    var k2 = document.getElementById("komorka2");
    var k3 = document.getElementById("komorka3");
    var k4 = document.getElementById("komorka4");
    k0.style.backgroundColor = "hsl("+color.value + ", 100%, 50%)";
    k1.style.backgroundColor = "hsl("+color.value + ", 80%, 50%)";
    k2.style.backgroundColor = "hsl("+color.value + ", 60%, 50%)";
    k3.style.backgroundColor = "hsl("+color.value + ", 40%, 50%)";
    k4.style.backgroundColor = "hsl("+color.value + ", 20%, 50%)";
 }