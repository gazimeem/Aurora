var e1 = null;

function ev1() {
    e1 = document.createEventObject(event);
    window.setTimeout(ev2, 0);
}

function ev2() {
    document.getElementById("sp1").innerHTML = "";
    CollectGarbage();
    var x = e1.srcElement;
}

function main() {
    var sp1 = document.createElement("span");
    sp1.id = "sp1";
    var div1 = document.createElement("div");
    div1.onclick = ev1;

    document.body.appendChild(sp1);
    sp1.appendChild(div1);

    div1.fireEvent("onclick");
}
