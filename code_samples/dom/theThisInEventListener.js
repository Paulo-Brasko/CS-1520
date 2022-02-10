window.addEventListener("load", addListeners);

function addListeners() { 
    // document.getElementById("button1").addEventListener("click", changeBackGroundColor, true);
    document.getElementById("button2").addEventListener("click", makeRed, true);
    document.getElementById("button3").addEventListener("click", changeBackGroundColor);
    let d = document.getElementById("button1");
    d.addEventListener("click", makeRed, true);
}

const changeBackGroundColor = () => {
    this.style.backgroundColor = "#FF0000";
}

function makeRed() {
    this.style.backgroundColor = "#FF0000";
}

