function check_text(){

    let user = document.getElementById("console").value;
    let cat = document.getElementById("cat_console");
    let r;

    if (user == "따라하지마"){
        cat.innerHTML = "알겠다냥";
        r = setTimeout(replay, 1500);
    }
    else if(user == "나 이제 갈게"){
        var app = document.getElementById('app');

        var typewriter = new Typewriter(app, {
            loop: true
        });

        typewriter
            .typeString('안돼')
            .pauseFor(1000)
            .deleteAll()
            .typeString('가지마라냥')
            .pauseFor(1000)
            .deleteAll()
            .typeString('나랑 더 놀아달라냥')
            .pauseFor(1500)
            .start();
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