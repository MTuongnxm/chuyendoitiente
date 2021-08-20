function setInput(value) {
    document.getElementById('input').value += value;
}


function cal() {
    let eq = document.getElementById('input').value;
    let ketqua = eval(eq);
    document.getElementById('input').value = ketqua;
}


function clearInput() {
    document.getElementById('input').value = ''
}
