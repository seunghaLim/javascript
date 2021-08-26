function check_text(){

    let user = document.getElementById("console").value;
    let cat = document.getElementById("cat_console");
    let r;

    if (user == "따라하지마"){
        cat.innerHTML = "알겠다냥";
        r = setTimeout(replay, 1500);
    }
    else{
        cat.innerHTML = user + "냥";
    }

}

function replay(){

    let cat = document.getElementById("cat_console");
    let user = document.getElementById("console").value;

    cat.innerHTML = "라고 할 줄 알았냥? " + user + "냥";
    clearTimeout(r);
    check_text();
}