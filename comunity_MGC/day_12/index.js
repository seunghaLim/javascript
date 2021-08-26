function check_text(){
    var v = document.getElementById("console").value;

    if (v == "불꺼줘"){

            if ( document.body.style.background != "rgb(128, 128, 128)"){
                 document.body.style.background ="rgb(128, 128, 128)";
            }
            else{
                document.body.style.background = "rgb(255, 255, 255)";
                console.log("이미 꺼져있어 멍청한 집사놈아 어휴 다시 켜준다");
            }
    }
    else{
        console.log(v);
    }
}