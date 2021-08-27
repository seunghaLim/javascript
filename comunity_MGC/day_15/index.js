var question = "";
var answer = "";
var key = 0; 

var json =
[
    {
        "question" : "안녕",
        "answer" : "안녕!냥!"
    },
    {
        "question" : "뭐해",
        "answer" : "너랑 대화한다냥"
    },
    {
        "question" : "빨리자라",
        "answer" : "니가뭔데"
    }
]
      
function check_text(){

    let user = document.getElementById("console").value;
    let cat = document.getElementById("cat_console");
    let r;

    if (key == 1){
        if(user == "응"){
			cat.innerHTML = "대답을 입력해달라냥!";
			key = 2; 
		}
		else if(user=="아니"){
			cat.innerHTML = ".. 싫음말구";
			key = 0; 
		}
		return;
    }

    if (key == 2){
        answer = user;
        pj();
        cat.innerHTML = "말을 배웠다냥!";
        key = 0; 
    }

    for (let i = 0; i < json.length; i++){

        if (user == json[i].question){
            cat.innerHTML = json[i].answer;
            return;
        }
    }

    cat.innerHTML = "말을 가르쳐 줄거냥?(응 or 아니)";
	question = user;
	key = 1;


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
    

}

function pj(){
	json.push({question: `${question}`, answer: `${answer}`}); 
}

function replay(){

    let cat = document.getElementById("cat_console");
    let user = document.getElementById("console").value;

    cat.innerHTML = "라고 할 줄 알았냥? " + user + "냥";
    check_text();
}