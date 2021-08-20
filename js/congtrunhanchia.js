function tinh() {
    const PHEPCHIA = '/'
    let so_thu_1 = document.getElementById('so_thu_1').value;
    let so_thu_2 = document.getElementById('so_thu_2').value;
    let toan_tu = document.getElementById('toan_tu').value;

    if (toan_tu == PHEPCHIA) {
        if (so_thu_2 == 0) {
            alert('khong co phep chia cho 0');
            return;
        }
    }
    result = eval(so_thu_1 + toan_tu + so_thu_2);

    document.getElementById('result').innerHTML = result;

}