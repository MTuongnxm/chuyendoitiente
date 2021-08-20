function moveUp() {
    //slice(start,end) : cat chuoi tu start-end
    let currentTop = document.getElementById('tank').style.top.slice(0, 2);
    document.getElementById('tank').style.top = currentTop - 1 + "px";
}

function moveLeft() {
    let currentLeft = document.getElementById('tank').style.left.slice(0, 2);
    document.getElementById('tank').style.left = currentLeft - 1 + "px";
}

function moveRight() {
    let currentLeft = document.getElementById('tank').style.left.slice(0, 2);
    document.getElementById('tank').style.left = currentLeft + 1 + "px";
}

function moveDown() {
    let currentDown = document.getElementById('tank').style.top.slice(0, 2);
    document.getElementById('tank').style.top = currentDown + 1 + "px";
}

