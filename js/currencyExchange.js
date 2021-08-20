function chuyentien() {
    var from = +document.getElementById('from').value;
    var to = +document.getElementById('to').value;
    var amount = +document.getElementById('amount').value;
    total = amount * to / from;
    document.getElementById('result').innerHTML = 'So tien la' + total
}