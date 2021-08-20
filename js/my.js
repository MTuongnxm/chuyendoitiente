function tinhtuoi() {
    let birthday = document.getElementById('birthday').value;
    let date = new Date(birthday);
    let now = new Date();
    birthdayYear = date.getFullYear();
    result = now.getFullYear() - birthdayYear
    document.getElementById('result').innerHTML = result + " 才"

    //lay nam hien tai - nam sinh

    //hien thi tuoi ra ngoai man hinh

}