function currencyExchange() {
    let money = document.getElementById('money').value;
    var exFrom = document.getElementById('exchange-from').value;
    var exTo = document.getElementById('exchange-to').value;

    const exRate = document.getElementById('ex-rate').value;

    if (exFrom === "usd") {
        var exFrom = 1;
    } else {
        var exFrom = exRate;
    }

    if (exTo === "usd") {
        var exTo = 1;
    } else {
        var exTo = exRate;

    }
    console.log(exFrom);
    console.log(exTo);
    let exMoney = +(money * exTo) / exFrom;
    console.log(exMoney);
    document.getElementById('exchange-result').innerHTML = (money * exTo) / exFrom;


}