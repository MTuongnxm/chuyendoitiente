function caculateMoney() {
    const money = document.getElementById("money").value;
    const rate = document.getElementById("rate").value;
    const month = document.getElementById("month").value;
    var listItem = '';
    if (money >= 1) {
        document.getElementById('result').innerHTML = Math.round(money * Math.pow((1 + rate / 12 / 100), month));
        for (let i = 1; i <= month; i++) {
            paidByMonth = Math.round(money * Math.pow((1 + rate / 12 / 100), i))
            let itemPaid =
                ` <tr>
                <td>${i}</td>
                <td>${paidByMonth}</td> <tr>`;
            listItem = listItem + itemPaid;

        }
        document.getElementById('table').innerHTML = `<thead>
                <th>Tháng</th>
                <th>Tiền</th>
            </thead>`+ listItem;
    } else {
        document.getElementById('result').innerHTML = "Opp"
    }

}