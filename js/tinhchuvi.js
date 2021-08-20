const pi = 3.1416;

function hinhtron() {
    let r = document.getElementById('r').value;
    let chuvi = 2 * r * pi;
    let dientich = r ** 2 * pi;
    console.log(chuvi);
    console.log(dientich);
    document.getElementById('result').innerHTML = "C hình tròn = " + chuvi + '<br>' + "S hình tròn = " + dientich;
}
